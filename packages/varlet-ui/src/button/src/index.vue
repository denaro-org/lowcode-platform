<template>
    <Button v-bind="config">{{ config.buttonText }}</Button>
</template>

<script setup lang="ts">
import { Button } from '@varlet/ui'
import '@varlet/ui/es/button/style'

import { varButtonProps } from './props'

defineOptions({
    name: 'TmVarButton'
})
defineProps(varButtonProps)
</script>
