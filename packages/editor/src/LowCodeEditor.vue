<template>
    <section :class="[styles.lowCodeEditor, 'flex-column']">
        <!-- 头部 -->
        <EditorHeader />

        <section :class="[styles.editorBody, 'flex-row']">
            <!-- 左边组件选择区域 -->
            <EditorNav />
            <!-- 中间 runtime 区域 -->
            <EditorRuntime />
        </section>
    </section>
</template>

<script lang="ts" setup>
import type { EditorComponent } from '@lowcode/shared'
import type { PropType } from 'vue'

import { provide } from 'vue'

import { EditorHeader, EditorNav, EditorRuntime } from '@/components/index.js'
import styles from '@/index.module.scss'

defineOptions({
    name: 'LowCodeEditor'
})

const props = defineProps({
    // ui schema
    uiSchema: {
        type: Object as PropType<Record<string, EditorComponent>>,
        required: true,
        default: () => ({})
    },
    // runtime url
    runtimeUrl: {
        type: String,
        required: true,
        default: null
    }
})

provide<EditorComponent[]>('uiSchema', Object.values(props.uiSchema))
provide<string>('runtimeUrl', props.runtimeUrl)
</script>

<style lang="scss">
@import './styles/index';
</style>
