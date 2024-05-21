<template>
    <Icon v-bind="config" />
</template>

<script setup lang="ts">
import { Icon } from '@varlet/ui'
import '@varlet/ui/es/icon/style'

import { varIconProps } from './props'

defineOptions({
    name: 'TmVarIcon'
})
defineProps(varIconProps)
</script>
