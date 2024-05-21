<template>
    <Icon v-bind="config" />
</template>

<script setup lang="ts">
import { Icon } from '@varlet/ui'

import { varIconProps } from './props'

defineOptions({
    name: 'TmVarIcon'
})
defineProps(varIconProps)
</script>
