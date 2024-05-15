<template>
    <var-ellipsis v-bind="config">
        {{ config.text }}
    </var-ellipsis>
</template>

<script setup lang="ts">
import { varEllipsisProps } from './props'

defineOptions({
    name: 'TmVarEllipsis'
})
defineProps(varEllipsisProps)
</script>
