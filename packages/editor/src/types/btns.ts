import type { ComponentBind, ComponentBindName, UseAppDSL } from './hooks'
import type { OnEvent } from '@lowcode/shared'
import type { VNode } from 'vue'

/**
 * @description 通用的按钮配置类型
 */
export interface BtnItem {
    /**
     * @description 绑定的 props
     */
    bindProps?: ComponentBind['bindProps']
    /**
     * @description 配置要展示的组件名
     */
    componentBindName?: ComponentBindName
    /**
     * @description 显示的图标
     */
    icon: VNode
    /**
     * @description 配置的文案
     */
    label: string
    /**
     * @description 绑定的 on 事件
     */
    on?: OnEvent<{
        /**
         * @description 重置 DSL 数据
         */
        resetAppDSL: UseAppDSL['resetAppDSL']
        /**
         * @description 画布的 HTML 节点 ID
         */
        simulatorEditorCls: string
    }>
}
