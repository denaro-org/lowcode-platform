<!-- eslint-disable vue/no-v-html -->
<template>
    <div :class="['gap-12 flex-column']">
        <template v-for="item in flexStyleConfig" :key="item.label">
            <div :class="['gap-8 flex-column']">
                <div :class="[styles.flexTitle, 'flex-row w-100']">
                    <span>{{ item.label }}</span>
                    <span>
                        {{
                            stateFormModel[
                                camelCase(item.label) as keyof CSSProperties
                            ] || item.defaultValue
                        }}
                    </span>

                    <Radio
                        :checked="
                            stateFormModel[
                                camelCase(item.label) as keyof CSSProperties
                            ] === item.defaultValue
                        "
                        :class="[styles.flexDefault, 'flex-row-end']"
                        size="small"
                        @click="changFlexStyle(item.label, item.defaultValue)">
                        默认
                    </Radio>
                </div>

                <div :class="['flex gap-12']">
                    <template v-for="_item in item.options" :key="_item.value">
                        <Tooltip :title="`${item.label}: ${_item.value}`">
                            <i
                                :class="[
                                    styles.flexIcon,
                                    stateFormModel[
                                        camelCase(
                                            item.label
                                        ) as keyof CSSProperties
                                    ] === _item.value && styles.isActive,
                                    'flex flex-center'
                                ]"
                                @click="changFlexStyle(item.label, _item.value)"
                                v-html="_item.icon"></i>
                        </Tooltip>
                    </template>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import type { FlexStyleValue } from '@/types'
import type { CSSProperties } from 'vue'

import { Radio, Tooltip } from 'ant-design-vue'
import { camelCase } from 'lodash-es'

import styles from './index.module.scss'
import { flexStyleConfig } from '../const'

const stateFormModel = defineModel('model', {
    type: Object,
    required: true
})
defineOptions({
    name: 'FlexStyle'
})

const changFlexStyle = (key: string, value: FlexStyleValue) => {
    if (stateFormModel.value.display !== 'flex') {
        stateFormModel.value.display = 'flex'
    }

    ;(stateFormModel.value[camelCase(key) as keyof CSSProperties] as unknown) =
        value
}
</script>
