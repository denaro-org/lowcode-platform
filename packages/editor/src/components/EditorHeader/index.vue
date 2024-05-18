<template>
    <header :class="[styles.editorHeader, 'box-shadow-base', 'flex-row']">
        <section :class="[styles.headerLeft]"></section>

        <section :class="[styles.headerCenter]">
            <div :class="[styles.centerBtnList, 'flex', 'flex-around']">
                <div
                    v-for="(item, index) in centerBtnList"
                    :key="index"
                    :class="[
                        styles.centerItem,
                        'flex-column',
                        'flex-row-center'
                    ]"
                    v-bind="item.on">
                    <Tooltip placement="bottom" :title="item.label">
                        <component :is="item.icon" :class="[styles.btnIcon]" />
                        <span class="text-ellipsis">{{ item.label }}</span>
                    </Tooltip>
                </div>
            </div>
        </section>

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

<script setup lang="ts">
import { PlayCircleOutlined } from '@ant-design/icons-vue'
import { Button, Tooltip } from 'ant-design-vue'
import { ref } from 'vue'

import { centerBtnList } from './const'
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
