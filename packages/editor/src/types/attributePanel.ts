import type { EditorProps } from '@lowcode/shared'
import type { TabPaneProps } from 'ant-design-vue'
import type { VNode } from 'vue'

// 子组件的配置
export interface ChildrenConfig {
    // 组件的 props 配置
    props?: Record<string, EditorProps>
    // 显示的标题
    title: string
}

// 右侧切换面板的配置
export interface TabListItem extends TabPaneProps {
    // 子组件的配置
    childrenConfig?: ChildrenConfig[]
    // 渲染的组件
    component: VNode
}
