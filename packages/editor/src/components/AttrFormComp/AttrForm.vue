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
import { Form } from 'ant-design-vue'

const stateFormModel = defineModel('model', {
    type: Object,
    required: true
})
defineOptions({
    name: 'AttrForm'
})
</script>
