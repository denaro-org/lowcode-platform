<template>
    <Modal v-model:open="dialogVisible" :footer="null" :closable="false">
        <WujieVue
            ref="preview"
            name="LowCodePreview"
            :url="previewUrl"
            :props="{ appDSL }"
            :plugins="plugins"
            :preload-app="{
                name: 'PreviewApp',
                props: {
                    appDSL
                },
                plugins
            }" />
    </Modal>
</template>

<script setup lang="ts">
import { Modal } from 'ant-design-vue'
import { inject, watchEffect } from 'vue'
import WujieVue from 'wujie-vue3'

import { useAppDSL } from '@/hooks'
import { PreviewUrlSymbol } from '@/symbol'

defineOptions({
    name: 'PreviewDialog'
})

const previewUrl = inject<string>(PreviewUrlSymbol)
const dialogVisible = defineModel<boolean>('visible', {
    type: Boolean,
    default: false
})

const { appDSL } = useAppDSL()

const plugins = [
    // vite 应用切换至子应用，有可能导致样式消失，具体原因和解决办法详见 [issue](https://github.com/Tencent/wujie/issues/434#issuecomment-1614089196)
    {
        patchElementHook(element: HTMLStyleElement, iframeWindow: Window) {
            if (element.nodeName === 'STYLE') {
                element.insertAdjacentElement = (_position, ele) =>
                    iframeWindow.document.head.appendChild(ele)
            }
        }
    }
]

// 向子应用注入
watchEffect(() => {
    const contentWindow = (
        window.document.querySelector(
            'iframe[name=LowCodePreview]'
        ) as HTMLIFrameElement
    )?.contentWindow

    if (!contentWindow) return
    Object.defineProperty(contentWindow, 'userAgent', {
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        writable: true
    })
})
</script>
