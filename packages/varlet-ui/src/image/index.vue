<template>
    <Image lazy src="https://picsum.photos/200/200" />
</template>

<script setup lang="ts">
import { Image } from '@varlet/ui'
import '@varlet/ui/es/image/style'

defineOptions({
    name: 'TmVarImage'
})
</script>
