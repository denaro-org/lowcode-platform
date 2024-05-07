<template>
    <LowCodeEditor :ui-schema="uiSchema" :runtime-url="runtimeUrl" />
</template>

<script lang="ts" setup>
import { LowCodeEditor } from '@lowcode/editor'
import { uiSchema } from '@lowcode/varlet-ui'
import '@lowcode/editor/index.css'
import { ref } from 'vue'

defineOptions({
    name: 'PlaygroundApp'
})

const runtimeUrl = ref('http://localhost:5174/')
</script>
