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
            <FormItem :label="item.label" :name="item.propName">
                <template v-if="item.type === EditorPropsType.select">
                    <Select
                        v-model="stateFormModel[item.propName]"
                        :options="item.options"
                        :placeholder="item.placeholder" />
                </template>

                <template v-if="item.type === EditorPropsType.input">
                    <Input
                        v-model="stateFormModel[item.propName]"
                        :placeholder="item.placeholder" />
                </template>
            </FormItem>
        </template>
    </Form>
</template>

<script setup lang="ts">
import { EditorPropsType, FormItemProps } from '@lowcode/shared'
import { Form, FormItem, Select, Input } from 'ant-design-vue'
import { forEach } from 'lodash-es'
import { computed, ref } from 'vue'

import styles from './index.module.scss'

import { useAppDSL, useUISchema } from '@/hooks'

defineOptions({
    name: 'AttrPanel'
})

const { currentBlock } = useAppDSL()
const { currentSchema } = useUISchema(currentBlock)
const currentProps = computed(() => currentSchema.value.props)

const formItemConfigs = computed(() => {
    const result: FormItemProps[] = []
    forEach(currentProps.value, (item, index) => {
        result.push({
            ...item,
            propName: index
        })
    })

    return result
})

const stateFormModel = ref(currentBlock.value.props ?? {})
</script>
