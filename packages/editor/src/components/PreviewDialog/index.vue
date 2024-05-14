<template>
    <Modal v-model:open="dialogVisible" destroy-on-close :footer="null">
        <WujieVue ref="preview" sync :url="previewUrl" />
    </Modal>
</template>

<script lang="ts" setup>
import { Modal } from 'ant-design-vue'
import { inject } from 'vue'
import WujieVue from 'wujie-vue3'

defineOptions({
    name: 'PreviewDialog'
})

const previewUrl = inject('previewUrl')
const dialogVisible = defineModel('visible', { type: Boolean, default: false })
</script>
