<template>
    <LowCodePreview :app-dsl="appDSL" :ui-schema="uiSchema" />
</template>

<script setup lang="ts">
import type { WujieProps } from '@lowcode/shared'

import { LowCodePreview } from '@lowcode/editor'
import { uiSchema } from '@lowcode/varlet-ui'
import { computed } from 'vue'

defineOptions({
    name: 'PreviewApp'
})

const props = (window.$wujie?.props ?? {}) as WujieProps
const appDSL = computed(() => props.appDSL)
</script>
