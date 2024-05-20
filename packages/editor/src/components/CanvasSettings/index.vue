<template>
    <Drawer v-model:open="isOpen" placement="right" title="画布配置" />
</template>

<script setup lang="ts">
import { Drawer } from 'ant-design-vue'

const isOpen = defineModel<boolean>('open', {
    type: Boolean,
    required: true,
    default: false
})
defineOptions({
    name: 'CanvasSettings'
})
</script>
