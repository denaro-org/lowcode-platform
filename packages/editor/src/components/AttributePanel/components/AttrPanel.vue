<template>
    <Form
        label-align="left"
        :model="stateFormModel"
        auto-complete="off"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        label-wrap>
        <FormItem label="组件 ID">
            <span :class="['text-ellipsis', styles.readonlyText]">
                {{ currentBlock.UUID || '-' }}
            </span>
        </FormItem>

        <template v-for="(item, index) in formItemConfigs" :key="index">
            <FormItem
                :label="item.label"
                :name="item.propName"
                :rules="item.rules">
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
            </FormItem>
        </template>
    </Form>
</template>

<script setup lang="ts">
import { EditorPropsType, EditorFormItemProps } from '@lowcode/shared'
import {
    Form,
    FormItem,
    Select,
    Input,
    Switch,
    InputNumber
} from 'ant-design-vue'
import { forEach } from 'lodash-es'
import { computed } from 'vue'

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
