import type { EditorProps } from './props'
import type { CSSProperties, VNode } from 'vue'

// 组件接入的配置
export interface EditorComponent {
    // 唯一标识, 自动生成无需手动配置
    UUID?: string
    // 是否可被进行拖拽
    draggable?: boolean
    // 组件英文名称
    key: string
    // 组件中文名字
    label: string
    // 组件所属的模块（基础组件、容器组件）
    moduleName: keyof ComponentModules
    // 组件预览函数
    preview: () => VNode
    // 组件的 props 配置
    props?: Record<string, EditorProps>
    // 组件渲染函数
    render: (data: {
        block: EditorBlockData
        custom: Record<string, unknown>
        model: Record<string, unknown>
        props: Record<string, unknown>
        styles: CSSProperties
    }) => () => JSX.Element
    // 组件样式
    styles?: CSSProperties
}

export type EditorComponents = Record<string, EditorComponent>

// 组件模块
export interface ComponentModules {
    // 基础组件
    baseWidgets: EditorComponent[]
    // 容器组件
    containerComponents: EditorComponent[]
}

// 当前被操作的组件
export interface EditorBlockData {
    // 唯一标识
    UUID?: string
    // 组件的名称
    label: string
    // 组件所属的模块（基础组件、容器组件）
    moduleName: keyof ComponentModules
}
