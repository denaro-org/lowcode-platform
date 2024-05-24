<template>
    <Drawer
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
                    allow-clear
                    @change="changeDataSource" />
            </FormItem>
        </AttrForm>

        <div :class="[styles.dataSourceBody, thatSelect && 'flex-column']">
            <template v-if="thatSelect">
                <Divider>配置：{{ thatSelect }}</Divider>

                <div :class="['overflow-y-auto', styles.settingWarpper]">
                    <div
                        :class="[
                            styles.dragItem,
                            'flex flex-between w-100 gap-24'
                        ]">
                        <div class="flex flex-center">
                            <Tooltip title="按住拖拽排序">
                                <DragOutlined :class="[styles.dragItemIcon]" />
                            </Tooltip>
                        </div>

                        <div class="flex flex-center gap-12 w-100">
                            <Input placeholder="请输入 label" />

                            <Input placeholder="请输入 value" />

                            <Tooltip title="禁用状态">
                                <Switch />
                            </Tooltip>
                        </div>

                        <div class="flex-column gap-4">
                            <Tooltip title="添加一项">
                                <PlusCircleOutlined
                                    :class="[styles.dragItemIcon]" />
                            </Tooltip>
                            <Tooltip title="删除该项">
                                <MinusCircleOutlined
                                    :class="[styles.dragItemIcon]" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </template>

            <template v-else>
                <Divider />
                <div :class="[styles.isEmpty, 'flex flex-center']">
                    <Empty description="请选择数据源类型" />
                </div>
            </template>
        </div>

        <template #footer>
            <div class="flex flex-row-end">
                <Space>
                    <Button type="primary" @click="onSubmit">确认</Button>
                    <Button @click="onCancel">取消</Button>
                </Space>
            </div>
        </template>
    </Drawer>
</template>

<script setup lang="ts">
import {
    PlusCircleOutlined,
    MinusCircleOutlined,
    DragOutlined
} from '@ant-design/icons-vue'
import {
    Drawer,
    FormItem,
    Select,
    Divider,
    Input,
    Switch,
    Button,
    Space,
    Tooltip,
    Empty
} from 'ant-design-vue'
import { SelectProps } from 'ant-design-vue/es/vc-select'
import { ref, type PropType } from 'vue'

import { dataSourceCategorys } from './const'
import styles from './index.module.scss'

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

const thatSelect = ref()

/**
 * @description 切换数据源类型
 */
const changeDataSource = (value: SelectProps['value']) => {
    const flag = dataSourceCategorys.find(item => item.value === value)
    if (flag) {
        thatSelect.value = flag.label
    }
}

const onSubmit = () => {
    console.log(stateFormModel.value)
}
const onCancel = () => {
    isOpen.value = false
}
</script>
