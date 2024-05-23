<template>
    <Divider>{{ item.label }}</Divider>

    <Collapse v-model:activeKey="activeKey" :bordered="false" accordion>
        <CollapsePanel
            v-for="(e, index) in collapseOptions"
            :key="e.value || index"
            :header="e.label">
            <AttrFormItems
                v-model:model="stateFormModel[activeKey]"
                :form-item-configs="formItemConfigs" />
        </CollapsePanel>
    </Collapse>
</template>

<script setup lang="ts">
import type { EditorFormItemProps } from '@lowcode/shared'
import type { PropType } from 'vue'

import { Collapse, CollapsePanel, Divider } from 'ant-design-vue'
import { forEach } from 'lodash-es'
import { computed, ref } from 'vue'

import AttrFormItems from './AttrFormItems.vue'

defineOptions({
    name: 'ArrGroup'
})

const props = defineProps({
    item: {
        type: Object as PropType<EditorFormItemProps>,
        required: true
    }
})
const stateFormModel = defineModel<Record<string, unknown>[]>('value', {
    type: Array,
    required: true
})

const collapseOptions = computed(() => props.item.collapseOptions)

const activeKey = ref(0)

const formItemConfigs = computed(() => {
    const result: EditorFormItemProps[] = []

    forEach(props.item.props, (item, index) => {
        const { display } = item

        // 定义是否显示该项的 prop 配置
        if (display instanceof Function && activeKey.value) {
            const isDisplay = display({
                model: stateFormModel.value[activeKey.value]
            })
            if (!isDisplay) return
        }

        result.push({
            ...item,
            propName: index
        })
    })
    return result
})
</script>
