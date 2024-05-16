<template>
    <section :class="[styles.lowCodeEditor, 'flex-column']">
        <!-- 头部 -->
        <EditorHeader />

        <section :class="[styles.editorBody, 'flex-row']">
            <!-- 左边组件选择区域 -->
            <EditorNav />
            <!-- 中间渲染区域 -->
            <SimulatorEditor />
            <!-- 右边属性配置 -->
            <AttributePanel />
        </section>
    </section>
</template>

<script lang="ts" setup>
import type { EditorComponent, EditorComponents } from '@lowcode/shared'
import type { PropType } from 'vue'

import { onMounted, provide } from 'vue'

import {
    EditorHeader,
    EditorNav,
    SimulatorEditor,
    AttributePanel
} from '@/components'
import { initDSLData } from '@/hooks'
import styles from '@/index.module.scss'
import { UISchemaSymbol, PreviewUrlSymbol, InitDSLDataSymbol } from '@/symbol'
import { UseAppDSL } from '@/types'

defineOptions({
    name: 'LowCodeEditor'
})

const props = defineProps({
    // ui schema
    uiSchema: {
        type: Object as PropType<EditorComponents>,
        required: true,
        default: () => ({})
    },
    // preview url
    previewUrl: {
        type: String,
        required: true,
        default: null
    }
})

const { initAppDSL } = initDSLData()
onMounted(() => {
    initAppDSL()
})

window.$$refs = {}

provide<UseAppDSL>(InitDSLDataSymbol, initDSLData())
provide<EditorComponent[]>(UISchemaSymbol, Object.values(props.uiSchema))
provide<string>(PreviewUrlSymbol, props.previewUrl)
</script>

<style lang="scss">
@import './styles/index';
</style>
