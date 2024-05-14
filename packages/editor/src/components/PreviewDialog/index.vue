<template>
    <Modal v-model:open="dialogVisible" destroy-on-close :footer="null">
        <WujieVue
            ref="preview"
            sync
            :url="previewUrl"
            :props="{ appDSL }"
            :plugins="plugins" />
    </Modal>
</template>

<script lang="ts" setup>
import { Modal } from 'ant-design-vue'
import { inject } from 'vue'
import WujieVue from 'wujie-vue3'

import { useAppDSL } from '@/hooks'

defineOptions({
    name: 'PreviewDialog'
})

const previewUrl = inject('previewUrl')
const dialogVisible = defineModel('visible', { type: Boolean, default: false })

const { appDSL } = useAppDSL()

const plugins = [
    {
        patchElementHook(element: HTMLStyleElement, iframeWindow: Window) {
            if (element.nodeName === 'STYLE') {
                element.insertAdjacentElement = (_position, ele) =>
                    iframeWindow.document.head.appendChild(ele)
            }
        }
    }
]
</script>
