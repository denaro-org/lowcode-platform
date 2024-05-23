<template>
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
            v-bind="item.propsBind"
            @change="changeAddonAfter($event, item)">
            <template v-if="item.addonAfters" #addonAfter>
                <Select
                    v-model:value="thatModel['__addonAfter__']"
                    style="width: max-content"
                    :options="getAddonAfterOptions(item.addonAfters)" />
            </template>
        </InputNumber>
    </template>

    <!-- color -->
    <template v-if="item.type === EditorPropsType.color">
        <InputGroup compact>
            <Input
                v-model:value="stateFormModel[item.propName]"
                type="color"
                v-bind="item.propsBind"
                style="width: 30%" />

            <FormItemRest>
                <Input
                    v-model:value="stateFormModel[item.propName]"
                    readonly
                    style="width: calc(70% - 32px)" />
            </FormItemRest>

            <Button
                :disabled="!stateFormModel[item.propName]"
                @click="clearModel(item)">
                <template #icon>
                    <CloseCircleOutlined />
                </template>
            </Button>
        </InputGroup>
    </template>

    <!-- radioGroup -->
    <template v-if="item.type === EditorPropsType.radioGroup">
        <RadioGroup
            v-model:value="stateFormModel[item.propName]"
            button-style="solid"
            option-type="button"
            v-bind="item.propsBind" />
    </template>

    <!-- arrGroup -->
    <template v-if="item.type === EditorPropsType.arrGroup">
        <ArrGroup
            v-model:value="stateFormModel[item.propName]"
            :item="item"
            v-bind="item.propsBind" />
    </template>
</template>

<script setup lang="ts">
import type { EditorFormItemProps, SelectOptions } from '@lowcode/shared'
import type { InputNumberProps } from 'ant-design-vue'
import type { PropType } from 'vue'

import { CloseCircleOutlined } from '@ant-design/icons-vue'
import { EditorPropsType } from '@lowcode/shared'
import {
    FormItemRest,
    Select,
    Input,
    Switch,
    InputNumber,
    RadioGroup,
    InputGroup,
    Button
} from 'ant-design-vue'
import { ref } from 'vue'

import ArrGroup from './ArrGroup.vue'

const stateFormModel = defineModel('model', {
    type: Object,
    required: true
})
const props = defineProps({
    item: {
        type: Object as PropType<EditorFormItemProps>,
        required: true
    }
})
defineOptions({
    name: 'AttrFormItem'
})

const thatModel = ref<Record<string, string>>({
    __addonAfter__: props.item.addonAfters?.[0] ?? 'px'
})

/**
 * @description 修改 addonAfter 配置的回调
 * @param {InputNumberProps['value']} value 数字输入框绑定值
 * @param {EditorFormItemProps} item 传入的表单项配置
 * @return {void}
 */
const changeAddonAfter = (
    value: InputNumberProps['value'],
    item: EditorFormItemProps
): void => {
    if (item.useAddonAfter && item['__propName__']) {
        stateFormModel.value[item['__propName__']] = value
            ? `${value}${item.propsBind?.addonAfter ?? thatModel.value['__addonAfter__'] ?? 'px'}`
            : undefined
    }
}

/**
 * @description 获取 addonAfter 的 options
 * @param {string[]} addonAfters 传入 addonAfters 数组
 * @return {SelectOptions}
 */
const getAddonAfterOptions = (addonAfters: string[]): SelectOptions => {
    if (!addonAfters || !Array.isArray(addonAfters)) {
        return []
    }

    const result = addonAfters.map(item => {
        return {
            label: item,
            value: item
        }
    })

    return result as SelectOptions
}

/**
 * @description 用于手动清空表单项值
 */
const clearModel = (item: EditorFormItemProps) => {
    const { propName } = item
    stateFormModel.value[propName] = undefined
}
</script>
