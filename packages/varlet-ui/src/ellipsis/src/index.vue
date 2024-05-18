<template>
    <Ellipsis v-model:expand="isExpand" v-bind="config">
        {{ config.text }}
    </Ellipsis>
</template>

<script setup lang="ts">
import { Ellipsis } from '@varlet/ui'
import '@varlet/ui/es/ellipsis/style'

import { varEllipsisProps } from './props'

defineOptions({
    name: 'TmVarEllipsis'
})
defineProps(varEllipsisProps)
const isExpand = defineModel('expand', {
    type: Boolean,
    default: false
})
</script>
