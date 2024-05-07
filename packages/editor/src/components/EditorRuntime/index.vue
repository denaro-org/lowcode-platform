<template>
    <section :class="[styles.editorRuntime, 'flex', 'flex-center']">
        <WujieVue
            ref="lowcodeEditor"
            :url="url"
            sync
            :class="[styles.runtimeWarpper, 'box-shadow-base']"
            :style="warpperStyle"
            :props="{ appDSL }" />

        <section :class="[styles.editorMaskWrapper]" :style="warpperStyle">
            <DraggableTransitionGroup
                v-model:drag="drag"
                v-model="currentPage.blocks"
                v-bind="draggableBind"
                @change="onChange">
                <template #item="{ element }">
                    <div
                        :class="[
                            styles.listGroupItem,
                            element.focus && 'is-focus'
                        ]"
                        :data-label="element.label">
                        {{ element.label }}
                    </div>
                </template>
            </DraggableTransitionGroup>
        </section>
    </section>
</template>

<script lang="ts" setup>
import type { DraggableChangeVal } from '@/types/index.js'
import type { VNode } from 'vue'

import { computed, inject, ref } from 'vue'
import WujieVue from 'wujie-vue3'

import styles from './index.module.scss'

import DraggableTransitionGroup from '@/components/DraggableTransitionGroup/index.vue'
import { MOBILE_SIZE } from '@/config/index.js'
import { useAppDSL } from '@/hooks/index.js'

defineOptions({
    name: 'EditorRuntime'
})

const url = inject('runtimeUrl')
const warpperStyle = computed(() => {
    return {
        width: `${MOBILE_SIZE.width}px`,
        height: `${MOBILE_SIZE.height}px`
    }
})
const lowcodeEditor = ref<VNode>()
const drag = ref(false)

const { currentPage, appDSL, setCurrentBlock } = useAppDSL()

const draggableBind = computed(() => ({
    itemKey: 'UUID',
    draggable: '.item-drag'
}))

const onChange = (val: DraggableChangeVal) => {
    const {
        added: { element }
    } = val
    setCurrentBlock(element)
}
</script>
