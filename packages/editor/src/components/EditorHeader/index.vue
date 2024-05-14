<template>
    <header :class="[styles.editorHeader, 'box-shadow-base', 'flex-row']">
        <section :class="[styles.headerLeft]"></section>
        <section :class="[styles.headerCenter]"></section>
        <section
            :class="[styles.headerRight, 'flex-row', 'flex-column-center']">
            <Tooltip placement="bottom" title="预览效果">
                <div :class="[styles.playPreview]">
                    <Button
                        type="primary"
                        shape="circle"
                        size="large"
                        @click="runPreview">
                        <PlayCircleOutlined />
                    </Button>
                </div>
            </Tooltip>
        </section>
    </header>

    <PreviewDialog v-model:visible="isShowH5Preview" />
</template>

<script lang="ts" setup>
import { PlayCircleOutlined } from '@ant-design/icons-vue'
import { Button, Tooltip } from 'ant-design-vue'
import { ref } from 'vue'

import styles from './index.module.scss'
import PreviewDialog from '../PreviewDialog/index.vue'

defineOptions({
    name: 'EditorHeader'
})

const isShowH5Preview = ref(false)

const runPreview = () => {
    isShowH5Preview.value = true
}
</script>
