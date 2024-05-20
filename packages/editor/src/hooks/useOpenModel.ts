import type {
    BindConfig,
    ComponentBind,
    ComponentBindName,
    UseOpenModel
} from '@/types'
import type { VNodes } from '@lowcode/shared'

import { computed, h, inject, reactive } from 'vue'

import { CanvasSettings, PreviewDialog } from '@/components'
import { InitOpenModelSymbol } from '@/symbol'

/**
 * @description 用于打开各种的自定义弹窗、抽屉等
 * @returns {UseOpenModel}
 */
export const initOpenModel = (): UseOpenModel => {
    const componentBind = reactive<ComponentBind>({
        name: null,
        open: false
    })

    const bindConfig: VNodes<ComponentBindName> = {
        // 画布配置的组件
        canvasSettings: h(CanvasSettings),
        // 预览组件
        previewDialog: h(PreviewDialog)
    }

    /**
     * @description 用于同步 componentBind 绑定值, 并且打开或者关闭组件
     * @param {BindConfig} bindConfig 配置
     */
    const openComponent = (bind: BindConfig): void => {
        componentBind.name = bindConfig[bind.name]
        componentBind.open = bind.open ?? false
        componentBind.bindProps = bind.bindProps ?? {
            destroyOnClose: true
        }
    }

    return {
        componentBind: computed(() => componentBind),
        openComponent
    }
}

/**
 * @description initOpenModel hooks 注入
 * @returns {UseAppDSL}
 */
export const useOpenModel = (): UseOpenModel =>
    inject<UseOpenModel>(InitOpenModelSymbol as symbol) as UseOpenModel
