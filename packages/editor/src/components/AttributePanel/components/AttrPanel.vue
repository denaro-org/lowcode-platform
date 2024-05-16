<template>
    <Form
        label-align="left"
        :model="stateFormModel"
        scroll-to-first-error
        auto-complete="off">
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
                <template v-if="item.type === EditorPropsType.select">
                    <Select
                        v-model:value="stateFormModel[item.propName]"
                        :options="item.options"
                        :placeholder="item.placeholder" />
                </template>

                <template v-if="item.type === EditorPropsType.input">
                    <Input
                        v-model:value="stateFormModel[item.propName]"
                        :placeholder="item.placeholder" />
                </template>

                <template v-if="item.type === EditorPropsType.switch">
                    <Switch v-model:checked="stateFormModel[item.propName]" />
                </template>
            </FormItem>
        </template>
    </Form>
</template>

<script setup lang="ts">
import { EditorPropsType, EditorFormItemProps } from '@lowcode/shared'
import { Form, FormItem, Select, Input, Switch } from 'ant-design-vue'
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
