<template>
    <section :class="[styles.lowCodeEditor, 'flex-column']">
        <!-- 头部 -->
        <EditorHeader />

        <section :class="[styles.editorBody, 'flex-row']">
            <!-- 左边组件选择区域 -->
            <EditorNav />
            <!-- 中间渲染区域 -->
            <SimulatorEditor />
        </section>
    </section>
</template>

<script lang="ts" setup>
import type { EditorComponent } from '@lowcode/shared'
import type { PropType } from 'vue'

import { onMounted, provide } from 'vue'

import { EditorHeader, EditorNav, SimulatorEditor } from '@/components/index.js'
import { useAppDSL } from '@/hooks/index.js'
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
    // preview url
    previewUrl: {
        type: String,
        required: true,
        default: null
    }
})

const { initAppDSL } = useAppDSL()
onMounted(() => {
    initAppDSL()
})

provide<EditorComponent[]>('uiSchema', Object.values(props.uiSchema))
provide<string>('previewUrl', props.previewUrl)
</script>

<style lang="scss">
@import './styles/index';
</style>
