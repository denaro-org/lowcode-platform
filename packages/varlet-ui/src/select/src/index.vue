<template>
    <Select v-model="modelValue">
        <Option
            v-for="(item, index) in config.options"
            v-bind="item"
            :key="index" />
    </Select>
</template>

<script setup lang="ts">
import { Select, Option } from '@varlet/ui'
import '@varlet/ui/es/select/style'

import { varSelectProps } from './props'

defineOptions({
    name: 'TmVarSelect'
})
defineProps(varSelectProps)
const modelValue = defineModel('value', {
    type: Boolean,
    default: false
})
</script>
