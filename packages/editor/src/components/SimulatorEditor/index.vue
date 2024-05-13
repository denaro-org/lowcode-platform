<template>
    <section :class="[styles.simulatorContainer]">
        <section :class="[styles.simulatorEditor]">
            <section :class="[styles.simulatorEditorContent]">
                <DraggableTransitionGroup
                    v-model:drag="drag"
                    v-model="currentPage.blocks"
                    v-bind="draggableBind">
                    <template #item="{ element: outElement }">
                        <div :data-label="outElement.label">
                            <CompRender
                                :key="outElement.UUID"
                                :element="outElement" />
                        </div>
                    </template>
                </DraggableTransitionGroup>
            </section>
        </section>
    </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

import CompRender from './comp-render.jsx'
import styles from './index.module.scss'

import DraggableTransitionGroup from '@/components/DraggableTransitionGroup/index.vue'
import { useAppDSL } from '@/hooks/index.js'

defineOptions({
    name: 'SimulatorEditor'
})

const drag = ref(false)
const { currentPage } = useAppDSL()

const draggableBind = computed(() => ({
    itemKey: 'UUID',
    draggable: '.item-drag'
}))
</script>
