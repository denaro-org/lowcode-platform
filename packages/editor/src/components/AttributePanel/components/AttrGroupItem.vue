<template>
    <div class="flex flex-column-center flex-between" style="gap: 24px">
        <template v-for="(e, index) in formItemChildren" :key="index">
            <AttrFormItem v-model:model="stateFormModel" :item="e" />
        </template>

        <FormItemRest>
            <Tooltip title="切换当前的表单项类型" placement="left">
                <Select
                    v-model:value="state.groupType"
                    style="width: 100px"
                    :options="getGroupTypeOptions" />
            </Tooltip>
        </FormItemRest>
    </div>
</template>

<script setup lang="ts">
import type { BlockProps, EditorFormItemProps } from '@lowcode/shared'
import type { PropType } from 'vue'

import { Select, Tooltip, FormItemRest } from 'ant-design-vue'
import { computed, reactive } from 'vue'

import AttrFormItem from './AttrFormItem.vue'

const stateFormModel = defineModel<BlockProps>('model', {
    type: Object,
    default: () => ({})
})
const props = defineProps({
    item: {
        type: Object as PropType<EditorFormItemProps>,
        required: true
    }
})
defineOptions({
    name: 'AttrGroupItem'
})

const formType: Record<string, string> = {
    switch: 'boolean',
    input: 'string',
    number: 'number'
}

const getGroupTypeOptions = computed(() => {
    const children = props.item.children

    return children?.map(e => ({
        label: formType[e.type],
        value: e.type,
        title: formType[e.type]
    }))
})
const state = reactive({
    groupType: getGroupTypeOptions.value?.[0].value ?? undefined
})
const formItemChildren = computed<EditorFormItemProps[]>(() => {
    const children = props.item.children

    const result = children?.filter(e => e.type === state.groupType) ?? []

    return result?.map(e => ({
        ...e,
        propName: props.item.propName
    }))
})
</script>
