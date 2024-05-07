import type { CSSProperties, VNode } from 'vue'

// 组件接入的配置
export interface EditorComponent {
    // 唯一标识
    _vid?: string
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
    // 组件样式
    styles?: CSSProperties
}

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
    _vid?: string
    // 组件的名称
    label: string
    // 组件所属的模块（基础组件、容器组件）
    moduleName: keyof ComponentModules
}
