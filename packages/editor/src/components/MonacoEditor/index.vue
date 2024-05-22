<template>
    <div :class="[styles.monacoEditor, 'h-100 flex-column']">
        <section :class="[styles.monacoEditorTools, 'flex flex-row-end']">
            <Button size="small" @click="copyDSL">
                <CopyOutlined />
                一键复制
            </Button>
        </section>

        <VueMonacoEditor
            v-model:value="code"
            :class="[styles.editorWarpper, 'flex-1']"
            :language="editorConfig[editorType].language"
            :options="MONACO_EDITOR_OPTIONS"
            theme="vs-dark" />
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import { CopyOutlined } from '@ant-design/icons-vue'
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import { useClipboard } from '@vueuse/core'
import { Button, message } from 'ant-design-vue'
import { computed } from 'vue'

import './index.ts'
import { editorConfig } from './config.ts'
import styles from './index.module.scss'

import { useAppDSL } from '@/hooks'

defineOptions({
    name: 'MonacoEditor'
})
const props = defineProps({
    editorType: {
        type: String as PropType<'AppDSL' | 'GenVueCode'>,
        required: true
    }
})

const MONACO_EDITOR_OPTIONS = {
    automaticLayout: true,
    formatOnType: true,
    formatOnPaste: true,
    readOnly: true
}
const { appDSL } = useAppDSL()

const code = computed(() => {
    switch (props.editorType) {
        case 'AppDSL':
            return JSON.stringify(appDSL, null, 2)
        default:
            return ''
    }
})

/**
 * @description 复制代码
 */
const copyDSL = () => {
    const { copy } = useClipboard({ source: JSON.stringify(appDSL, null, 2) })

    copy()
        .then(() => message.success('复制成功 !!!'))
        .catch(err => message.error(`复制失败：${err}`))
}
</script>
