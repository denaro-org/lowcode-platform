<template>
    <template v-for="(item, index) in formItemConfigs" :key="index">
        <FormItem
            :name="item.propName"
            :rules="item.rules"
            :tooltip="item.tooltip">
            <template #label>
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
import type { BlockProps, EditorFormItemProps } from '@lowcode/shared'
import type { PropType } from 'vue'

import { EditorPropsType } from '@lowcode/shared'
import { FormItem } from 'ant-design-vue'

import AttrFormItem from './AttrFormItem.vue'
import AttrGroupItem from './AttrGroupItem.vue'

defineOptions({
    name: 'FormItems'
})
const stateFormModel = defineModel<BlockProps>('model', {
    type: Object,
    default: () => ({})
})
defineProps({
    formItemConfigs: {
        type: Array as PropType<EditorFormItemProps[]>,
        required: true
    }
})
</script>
