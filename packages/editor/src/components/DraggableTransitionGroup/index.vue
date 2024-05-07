<template>
    <draggable
        v-model="list"
        :class="[styles.listGroup, isDrag && 'is-drag']"
        :component-data="{
            tag: 'ul',
            type: 'transition-group',
            name: !isDrag ? 'flip-list' : null
        }"
        :group="group"
        v-bind="{ ...dragOptions, ...$attrs }"
        :item-key="itemKey"
        @start="isDrag = true"
        @end="isDrag = false">
        <template #item="item">
            <div
                :class="{ 'item-drag': item.element.draggable }"
                :data-el="item.element.draggable">
                <slot name="item" v-bind="item"></slot>
            </div>
        </template>
    </draggable>
</template>

<script lang="ts" setup>
import type { EditorComponent } from '@lowcode/shared'
import type { PropType } from 'vue'

import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import draggable from 'vuedraggable'

import styles from './index.module.scss'

defineOptions({
    name: 'DraggableTransitionGroup'
})

const props = defineProps({
    moduleValue: {
        type: Array as PropType<EditorComponent[]>,
        default: () => []
    },
    drag: {
        type: Boolean,
        default: false
    },
    itemKey: {
        type: String,
        default: 'UUID'
    },
    group: {
        type: Object,
        default: () => ({ name: 'components' })
    },
    fallbackClass: { type: String, default: undefined }
})
const emit = defineEmits(['update:moduleValue', 'update:drag'])

const list = useVModel(props, 'moduleValue', emit)
const isDrag = useVModel(props, 'drag', emit)

const dragOptions = computed(() => ({
    animation: 200,
    disabled: false,
    scroll: true,
    ghostClass: 'ghost'
}))
</script>

<style lang="scss">
.flip-list-move {
    transition: transform 0.5s;
}

.no-move {
    transition: transform 0s;
}

.ghost {
    background: #c8ebfb;
    opacity: 0.5;
}
</style>
