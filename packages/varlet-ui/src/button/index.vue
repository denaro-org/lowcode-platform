<template>
    <var-button v-bind="config">{{ config.buttonText }}</var-button>
</template>

<script setup lang="ts">
import { varButtonProps } from './props'

defineOptions({
    name: 'TmVarButton'
})
defineProps(varButtonProps)
</script>
