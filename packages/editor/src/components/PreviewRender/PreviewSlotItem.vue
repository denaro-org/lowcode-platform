<template>
    <div class="__slot-item">
        <CompRender :element="element" />
    </div>
</template>

<script lang="ts" setup>
import type { EditorBlock } from '@lowcode/shared'
import type { PropType } from 'vue'

import CompRender from './CompRender.tsx'

defineOptions({
    name: 'PreviewSlotItem'
})
defineProps({
    element: {
        type: Object as PropType<EditorBlock>,
        required: true,
        default: () => ({})
    }
})
</script>
