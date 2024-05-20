import type { OnEvent } from '@lowcode/shared'
import type { VNode } from 'vue'

/**
 * @description 通用的按钮配置类型
 */
export interface BtnItem {
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
    on: OnEvent
}
