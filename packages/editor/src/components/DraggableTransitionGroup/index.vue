<template>
    <draggable
        v-model="list"
        :class="['list-group', isDrag && 'is-drag']"
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

<script setup lang="ts">
import type { EditorComponent } from '@lowcode/shared'

import { computed } from 'vue'
import draggable from 'vuedraggable'

defineOptions({
    name: 'DraggableTransitionGroup'
})
defineProps({
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

const list = defineModel<EditorComponent[]>('moduleValue', {
    type: Array,
    default: () => []
})
const isDrag = defineModel<boolean>('drag', {
    type: Boolean,
    default: false
})

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

.list-group {
    height: 100%;
    min-height: 40px;
}
</style>
