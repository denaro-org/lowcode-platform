<template>
    <Form
        label-align="left"
        :model="stateFormModel"
        auto-complete="off"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }">
        <FormItem label="组件 ID">
            <span :class="['text-ellipsis', styles.readonlyText]">
                {{ currentBlock.UUID || '-' }}
            </span>
        </FormItem>

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
                    <AttrGroupItem
                        v-model:model="stateFormModel"
                        :item="item" />
                </template>
            </FormItem>
        </template>
    </Form>
</template>

<script setup lang="ts">
import type { EditorFormItemProps } from '@lowcode/shared'

import { EditorPropsType } from '@lowcode/shared'
import { Form, FormItem } from 'ant-design-vue'
import { forEach } from 'lodash-es'
import { computed } from 'vue'

import AttrFormItem from './AttrFormItem.vue'
import AttrGroupItem from './AttrGroupItem.vue'
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
</script>
