<template>
    <template v-for="(item, index) in formItemConfigs" :key="index">
        <FormItem
            :name="item.propName"
            :rules="item.rules"
            :wrapper-col="getWrapperCol(item)">
            <template v-if="item.type !== EditorPropsType.arrGroup" #label>
                <span class="text-ellipsis w-100" :title="item.label">
                    {{ item.label }}
                </span>
            </template>

            <AttrFormItem v-model:model="stateFormModel" :item="item" />

            <template v-if="item.type === EditorPropsType.group">
                <AttrGroupItem v-model:model="stateFormModel" :item="item" />
            </template>
        </FormItem>
    </template>
</template>

<script setup lang="ts">
import type { EditorFormItemProps } from '@lowcode/shared'
import type { PropType } from 'vue'

import { EditorPropsType } from '@lowcode/shared'
import { FormItem } from 'ant-design-vue'

import AttrFormItem from './AttrFormItem.vue'
import AttrGroupItem from './AttrGroupItem.vue'

defineOptions({
    name: 'AttrFormItems'
})
const stateFormModel = defineModel('model', {
    type: Object,
    default: () => ({})
})
defineProps({
    formItemConfigs: {
        type: Array as PropType<EditorFormItemProps[]>,
        required: true
    }
})

const getWrapperCol = (item: EditorFormItemProps) => {
    if (item.type === EditorPropsType.arrGroup) {
        return { span: 24 }
    }
}
</script>
