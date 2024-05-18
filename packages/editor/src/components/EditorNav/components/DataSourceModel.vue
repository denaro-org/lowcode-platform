<template>
    <Modal v-model:open="isOpen" title="新增数据源" destroy-on-close>
        <Form
            :model="stateFormModel"
            auto-complete="off"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }">
            <FormItem name="category" label="数据源类型" />
        </Form>
    </Modal>
</template>

<script setup lang="ts">
import { Modal, Form, FormItem } from 'ant-design-vue'
import { PropType } from 'vue'

defineOptions({
    name: 'DataSourceModel'
})
const isOpen = defineModel<boolean>('open', {
    type: Boolean,
    required: true,
    default: false
})
const stateFormModel = defineModel('model', {
    type: Object,
    default: () => ({})
})
defineProps({
    mode: {
        type: String as PropType<'add' | 'edit'>,
        default: 'add'
    }
})
</script>
