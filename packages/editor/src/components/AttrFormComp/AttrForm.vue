<template>
    <Form
        label-align="left"
        :model="stateFormModel"
        auto-complete="off"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }">
        <slot></slot>
    </Form>
</template>

<script setup lang="ts">
import type { BlockProps } from '@lowcode/shared'
import type { CSSProperties } from 'vue'

import { Form } from 'ant-design-vue'

const stateFormModel = defineModel<BlockProps | CSSProperties>('model', {
    type: Object,
    required: true
})
defineOptions({
    name: 'AttrForm'
})
</script>
