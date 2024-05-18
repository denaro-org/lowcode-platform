<template>
    <div :class="[]">
        <Collapse v-model:activeKey="activeKey" :bordered="false" accordion>
            <CollapsePanel
                v-for="item in childrenConfig"
                :key="item.key"
                :header="item.title">
                <!-- Flex 弹性布局 -->
                <template v-if="item.key === 'flex-style'">
                    <FlexStyle v-model:model="stateFormModel" />
                </template>

                <template v-else>
                    <AttrForm v-model:model="stateFormModel">
                        <FormItems
                            v-model:model="stateFormModel"
                            :form-item-configs="getFormItemConfigs(item)" />
                    </AttrForm>
                </template>

                <template #extra>
                    <!-- 扩展 -->
                    <template v-if="item.key === 'flex-style'">
                        <Switch
                            :checked="stateFormModel.display === 'flex'"
                            checked-children="开"
                            un-checked-children="关"
                            @click="changeFlex" />
                    </template>
                </template>
            </CollapsePanel>
        </Collapse>
    </div>
</template>

<script setup lang="ts">
import type { ChildrenConfig } from '@/types'
import type { SwitchProps } from 'ant-design-vue'
import type { CSSProperties, PropType } from 'vue'

import { EditorFormItemProps } from '@lowcode/shared'
import { Collapse, CollapsePanel, Switch } from 'ant-design-vue'
import { forEach } from 'lodash-es'
import { computed, ref } from 'vue'

import AttrForm from './AttrForm.vue'
import FlexStyle from './FlexStyle.vue'
import FormItems from './FormItems.vue'

import { useAppDSL } from '@/hooks'

defineOptions({
    name: 'StylePanel'
})
const props = defineProps({
    childrenConfig: {
        type: Array as PropType<ChildrenConfig[]>,
        required: true
    }
})

const activeKey = ref(props.childrenConfig[0].key)
const { currentBlock } = useAppDSL()
const stateFormModel = computed({
    get() {
        return currentBlock.value.styles ?? {}
    },
    set(val) {
        currentBlock.value.styles = val
    }
})

const changeFlex = (checked: SwitchProps['checked'], event: Event) => {
    event.stopPropagation()
    ;(stateFormModel.value as CSSProperties).display = checked
        ? 'flex'
        : 'inherit'
}

const getFormItemConfigs = (item: ChildrenConfig) => {
    const result: EditorFormItemProps[] = []
    forEach(item.props, (_item, index) => {
        result.push({
            ..._item,
            propName: _item.useAddonAfter ? `__${index}__` : index,
            ...(_item.useAddonAfter && { __propName__: index })
        })
    })

    return result
}
</script>
