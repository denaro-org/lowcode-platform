<!-- eslint-disable vue/no-v-html -->

<template>
    <div :class="[styles.flexStyle, 'flex-column']">
        <template v-for="item in flexStyleConfig" :key="item.label">
            <div :class="[styles.flexStyleItem, 'flex-column']">
                <div :class="[styles.flexTitle, 'flex-row w-100']">
                    <span>{{ item.label }}</span>
                    <span>{{ item.defaultValue }}</span>

                    <Radio
                        :class="[styles.flexDefault, 'flex-row-end']"
                        size="small">
                        默认
                    </Radio>
                </div>

                <div :class="[styles.flexIcons, 'flex']">
                    <template v-for="_item in item.options" :key="_item.value">
                        <Tooltip :title="`${item.label}: ${_item.value}`">
                            <i
                                :class="[styles.flexIcon, 'flex flex-center']"
                                v-html="_item.icon"></i>
                        </Tooltip>
                    </template>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import type { CSSProperties, PropType } from 'vue'

import { Radio, Tooltip } from 'ant-design-vue'

import styles from './index.module.scss'
import { flexStyleConfig } from '../const'

const stateFormModel = defineModel('model', {
    type: Object as PropType<CSSProperties>,
    default: () => ({})
})
defineOptions({
    name: 'FlexStyle'
})
</script>
