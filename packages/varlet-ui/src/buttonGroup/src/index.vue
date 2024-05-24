<template>
    <ButtonGroup v-bind="config">
        <template v-for="(item, index) in config.childrenConfig" :key="index">
            <TmVarButton :config="item" />
        </template>
    </ButtonGroup>
</template>

<script setup lang="ts">
import { ButtonGroup } from '@varlet/ui'
import '@varlet/ui/es/button-group/style'

import { varButtonGroupProps } from './props'

import TmVarButton from '@/button'

defineOptions({
    name: 'TmVarButtonGroup'
})
defineProps(varButtonGroupProps)
</script>
