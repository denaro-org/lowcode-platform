<template>
    <!-- select -->
    <template v-if="item.type === EditorPropsType.select">
        <Select
            v-model:value="stateFormModel[item.propName]"
            class="w-100"
            v-bind="item.propsBind" />
    </template>

    <!-- input -->
    <template v-if="item.type === EditorPropsType.input">
        <Input
            v-model:value="stateFormModel[item.propName]"
            class="w-100"
            v-bind="item.propsBind" />
    </template>

    <!-- switch -->
    <template v-if="item.type === EditorPropsType.switch">
        <Switch
            v-model:checked="stateFormModel[item.propName]"
            v-bind="item.propsBind" />
    </template>

    <!-- number -->
    <template v-if="item.type === EditorPropsType.number">
        <InputNumber
            v-model:value="stateFormModel[item.propName]"
            class="w-100"
            v-bind="item.propsBind" />
    </template>
</template>

<script setup lang="ts">
import type { BlockProps, EditorFormItemProps } from '@lowcode/shared'
import type { PropType } from 'vue'

import { EditorPropsType } from '@lowcode/shared'
import { Select, Input, Switch, InputNumber } from 'ant-design-vue'

const stateFormModel = defineModel<BlockProps>('model', {
    type: Object,
    default: () => ({})
})
defineProps({
    item: {
        type: Object as PropType<EditorFormItemProps>,
        required: true
    }
})
defineOptions({
    name: 'AttrFormItem'
})
</script>
