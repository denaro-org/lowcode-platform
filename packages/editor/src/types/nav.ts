import type { VNode } from 'vue'

// 侧边栏的配置
interface NavItem {
    // 渲染的组件
    component: VNode
    // 图标
    icon?: VNode
    // 文案
    label: string
    // 名称
    name: string
}

export type NavConfig = NavItem[]
