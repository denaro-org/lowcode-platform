<template>
    <AttrForm v-model:model="stateFormModel">
        <FormItem
            label="组件 ID"
            :tooltip="`你可以利用该组件ID。对该组件进行获取和设置其属性, 组件可用属性可在控制台输入：$$refs['${currentBlock.UUID}'] 进行查看`">
            <div class="flex-row">
                <span :class="['text-ellipsis', styles.readonlyText]">
                    {{ currentBlock.UUID || '-' }}
                </span>
                <Tooltip
                    :title="`复制 $$refs['${currentBlock.UUID}']`"
                    placement="left">
                    <i
                        :class="[styles.copyIcon]"
                        @click="
                            copyToClipboard(`$$refs['${currentBlock.UUID}`)
                        ">
                        <CopyOutlined />
                    </i>
                </Tooltip>
            </div>
        </FormItem>

        <FormItems
            v-model:model="stateFormModel"
            :form-item-configs="formItemConfigs" />
    </AttrForm>
</template>

<script setup lang="ts">
import type { EditorFormItemProps } from '@lowcode/shared'

import { CopyOutlined } from '@ant-design/icons-vue'
import { FormItem, Tooltip, message } from 'ant-design-vue'
import { forEach } from 'lodash-es'
import { computed } from 'vue'

import AttrForm from './AttrForm.vue'
import FormItems from './FormItems.vue'
import styles from './index.module.scss'

import { useAppDSL, useUISchema } from '@/hooks'

defineOptions({
    name: 'AttrPanel'
})

const { currentBlock } = useAppDSL()
const { currentSchema } = useUISchema(currentBlock)
const currentProps = computed(() => currentSchema.value.props)

const formItemConfigs = computed(() => {
    const result: EditorFormItemProps[] = []
    forEach(currentProps.value, (item, index) => {
        const { display } = item

        // 定义是否显示该项的 prop 配置
        if (display instanceof Function) {
            const isDisplay = display({ model: stateFormModel.value })
            if (!isDisplay) return
        }

        result.push({
            ...item,
            propName: index
        })
    })

    return result
})

const stateFormModel = computed({
    get() {
        return currentBlock.value.props
    },
    set(val) {
        currentBlock.value.props = val
    }
})

// 复制到剪贴板
const copyToClipboard = (text: string) => {
    const input = document.createElement('input')
    input.value = text
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)

    message.success(`${text} 复制成功 !!!`)
}
</script>
