<template>
    <template v-for="outItem in blocks" :key="outItem.UUID">
        <PreviewSlotItem :element="outItem" />
    </template>
</template>

<script setup lang="ts">
import type { AppDSL, EditorComponent, EditorComponents } from '@lowcode/shared'
import type { PropType } from 'vue'

import { provide } from 'vue'

import { PreviewSlotItem } from '@/components'
import { UISchemaSymbol } from '@/symbol'

const props = defineProps({
    // ui schema
    uiSchema: {
        type: Object as PropType<EditorComponents>,
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

provide<EditorComponent[]>(UISchemaSymbol, Object.values(props.uiSchema))
</script>
