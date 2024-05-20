<template>
    <Modal
        v-model:open="isOpen"
        title="新增数据源"
        destroy-on-close
        cancel-text="取消"
        ok-text="确认"
        :width="670">
        <AttrForm v-model:model="stateFormModel">
            <FormItem label="数据源类型" name="dataSourceType">
                <Select
                    v-model:value="stateFormModel.dataSourceType"
                    placeholder="请选择数据源类型"
                    :options="dataSourceCategorys"
                    @change="changeDataSource" />
            </FormItem>
            <!--  -->
        </AttrForm>
    </Modal>
</template>

<script setup lang="ts">
import type { DataSourceCategory } from '@lowcode/shared'
import type { SelectProps } from 'ant-design-vue'
import type { PropType } from 'vue'

import { Modal, FormItem, Select } from 'ant-design-vue'

import { dataSourceConfig, dataSourceCategorys } from '../const'

import { AttrForm } from '@/components'

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

// const config = [
//     {
//         label: undefined,
//         value: undefined,
//         disabled: undefined
//     }
// ]

const changeDataSource = (val: SelectProps['value']) => {
    const config = dataSourceConfig[val as DataSourceCategory]
    const configValue = Object.keys(config)
    const payload = Object.fromEntries(configValue.map(e => [e, undefined]))

    if (!stateFormModel.value.config) {
        stateFormModel.value.config = []
    }

    stateFormModel.value.config.push(payload)
}
</script>
