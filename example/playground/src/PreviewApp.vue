<template>
    <LowCodePreview :app-dsl="props.appDSL" :ui-schema="uiSchema" />
</template>

<script lang="ts" setup>
import type { WujieProps } from '@lowcode/shared'

import { LowCodePreview } from '@lowcode/editor'
import { uiSchema } from '@lowcode/varlet-ui'

defineOptions({
    name: 'PreviewApp'
})

const props = (window.$wujie?.props ?? {}) as WujieProps
</script>
