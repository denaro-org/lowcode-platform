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
            </CollapsePanel>
        </Collapse>
    </div>
</template>

<script setup lang="ts">
import type { ChildrenConfig } from '@/types'
import type { PropType } from 'vue'

import { Collapse, CollapsePanel } from 'ant-design-vue'
import { computed, ref } from 'vue'

import FlexStyle from './FlexStyle.vue'

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
        return currentBlock.value.styles
    },
    set(val) {
        currentBlock.value.styles = val
    }
})
</script>
