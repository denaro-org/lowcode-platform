<template>
    <template v-for="outItem in blocks" :key="outItem.UUID">
        <PreviewSlotItem :element="outItem" />
    </template>
</template>

<script lang="ts" setup>
import type { AppDSL, EditorComponent } from '@lowcode/shared'
import type { PropType } from 'vue'

import { provide } from 'vue'

import { PreviewSlotItem } from '@/components'

const props = defineProps({
    // ui schema
    uiSchema: {
        type: Object as PropType<Record<string, EditorComponent>>,
        required: true,
        default: () => ({})
    },
    // appDSL
    appDsl: {
        type: Object as PropType<AppDSL>,
        default: () => ({}),
        required: true
    }
})

const currentPage = props.appDsl?.pages?.['/'] ?? {}
const blocks = currentPage?.blocks ?? []
provide<EditorComponent[]>('uiSchema', Object.values(props.uiSchema))
</script>
