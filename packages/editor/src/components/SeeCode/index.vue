<template>
    <Drawer v-model:open="isOpen" placement="right" v-bind="$attrs" width="80%">
        <MonacoEditor :editor-type="editorType" />
    </Drawer>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import { Drawer } from 'ant-design-vue'

import { MonacoEditor } from '@/components'

const isOpen = defineModel<boolean>('open', {
    type: Boolean,
    required: true,
    default: false
})
defineOptions({
    name: 'SeeCode'
})
defineProps({
    editorType: {
        type: String as PropType<'AppDSL' | 'GenVueCode'>,
        required: true
    }
})
</script>
