<template>
    <section :class="[styles.simulatorContainer, 'flex', 'flex-center']">
        <section
            id="SimulatorEditorRef"
            :class="[styles.simulatorEditor]"
            :style="warpperStyle">
            <DraggableTransitionGroup
                v-model:drag="drag"
                v-model="currentPage.blocks"
                v-bind="draggableBind">
                <template #item="{ element: outElement }">
                    <div
                        :data-label="outElement.label"
                        :class="[
                            styles.listGroupItem,
                            outElement.focus && styles.focus
                        ]"
                        @mousedown="selectComp(outElement)">
                        <CompRender
                            :key="outElement.UUID"
                            :element="outElement"
                            :style="{
                                pointerEvents: Object.keys(
                                    outElement.props?.slots || {}
                                ).length
                                    ? 'auto'
                                    : 'none'
                            }" />
                    </div>
                </template>
            </DraggableTransitionGroup>
        </section>
    </section>
</template>

<script setup lang="ts">
import type { EditorBlock } from '@lowcode/shared'

import { ref, computed } from 'vue'

import styles from './index.module.scss'

import { DraggableTransitionGroup, CompRender } from '@/components'
import { MOBILE_SIZE } from '@/config'
import { useAppDSL } from '@/hooks'

defineOptions({
    name: 'SimulatorEditor'
})

const drag = ref(false)
const { currentPage, setCurrentBlock } = useAppDSL()
const warpperStyle = computed(() => {
    return {
        width: `${MOBILE_SIZE.width}px`,
        height: `${MOBILE_SIZE.height}px`
    }
})
const draggableBind = computed(() => ({
    itemKey: 'UUID',
    draggable: '.item-drag'
}))

/** ---- 组件选择操作 -----   */
// 给当前点击的组件设置聚焦
const handleSlotsFocus = (block: EditorBlock): void => {
    const slots = block.props?.slots || {}
    if (Object.keys(slots).length > 0) {
        //
    }
}

// 选择要操作的组件
const selectComp = (element: EditorBlock): void => {
    setCurrentBlock(element)
    const blocks: EditorBlock[] = currentPage.value.blocks

    blocks.forEach(block => {
        block.focus = element.UUID === block.UUID
        handleSlotsFocus(block)
    })
}
</script>
