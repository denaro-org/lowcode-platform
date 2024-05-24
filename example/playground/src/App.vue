<template>
    <LowCodeEditor :ui-schema="uiSchema" :preview-url="previewUrl" />
</template>

<script setup lang="ts">
import { LowCodeEditor } from '@lowcode/editor'
import { uiSchema } from '@lowcode/varlet-ui'
import '@lowcode/editor/index.css'
import { ref } from 'vue'

defineOptions({
    name: 'PlaygroundApp'
})

const previewUrl = ref('./preview')
</script>
