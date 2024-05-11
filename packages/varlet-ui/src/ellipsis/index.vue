<template>
    <Ellipsis>
        <slot></slot>
    </Ellipsis>
</template>

<script setup lang="ts">
import { Ellipsis } from '@varlet/ui'
import '@varlet/ui/es/ellipsis/style'

defineOptions({
    name: 'TmVarEllipsis'
})
</script>
