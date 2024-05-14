<template>
    <LowCodeEditor :ui-schema="uiSchema" :preview-url="previewUrl" />
</template>

<script lang="ts" setup>
import { LowCodeEditor } from '@lowcode/editor'
import { uiSchema } from '@lowcode/varlet-ui'
import '@lowcode/editor/index.css'
import { ref } from 'vue'

defineOptions({
    name: 'PlaygroundApp'
})

const previewUrl = ref('http://localhost:5173/preview.html')
</script>
