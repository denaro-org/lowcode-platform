<template>
    <Ellipsis>
        <slot></slot>
    </Ellipsis>
</template>

<script setup lang="ts">
import { Ellipsis } from '@varlet/ui'

defineOptions({
    name: 'VarEllipsis'
})
</script>
