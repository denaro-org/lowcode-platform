<template>
    <div>{{ childrenConfig }}</div>
</template>

<script setup lang="ts">
import type { ChildrenConfig } from '@/types'
import type { PropType } from 'vue'

defineOptions({
    name: 'StylePanel'
})
defineProps({
    childrenConfig: {
        type: Array as PropType<ChildrenConfig[]>,
        required: true
    }
})
</script>
