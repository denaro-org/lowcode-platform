<template>
    <div>{{ currentBlock }}</div>
</template>

<script setup lang="ts">
import { useAppDSL } from '@/hooks'

defineOptions({
    name: 'AttrPanel'
})

const { currentBlock } = useAppDSL()
</script>
