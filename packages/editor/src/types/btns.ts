import type { VNode } from 'vue'

export interface BtnItem {
    // 显示的图标
    icon: VNode
    // 配置的文案
    label: string
    // 绑定的 on 事件
    on: Record<'onClick', () => void>
}
