import type { EditorProps } from './props'
import type { CSSProperties, VNode } from 'vue'

/**
 * @description 组件接入的配置
 */
export interface EditorComponent {
    /**
     * @description 唯一标识, 自动生成无需手动配置
     */
    UUID?: string
    /**
     * @description 是否可被进行拖拽
     */
    draggable?: boolean
    /**
     * @description 组件英文名称
     */
    key: string
    /**
     * @description 组件中文名字
     */
    label: string
    /**
     * @description 组件所属的模块（基础组件、容器组件）
     * 可选值: keyof ComponentModules
     */
    moduleName: keyof ComponentModules
    /**
     * @description 组件预览函数
     */
    preview: () => VNode
    /**
     * @description 组件的 props 配置
     */
    props?: Record<string, EditorProps>
    /**
     * @description 组件渲染函数
     */
    render: (data: {
        /**
         * @description 当前选中组件配置
         */
        block: EditorBlockData
        /**
         * @description 绑定的额外配置项
         */
        custom: Record<string, unknown>
        /**
         * @description 绑定的表单值
         */
        model: Record<string, unknown>
        /**
         * @description 绑定的 props 配置
         */
        props: Record<string, unknown>
        /**
         * @description 绑定的样式
         */
        styles: CSSProperties
    }) => () => JSX.Element
    /**
     * @description 绑定的组件样式
     */
    styles?: CSSProperties
}

/**
 * @description 组件接入的配置集合
 */
export type EditorComponents = Record<string, EditorComponent>

/**
 * @description 组件模块
 */
export interface ComponentModules {
    /**
     * @description 基础组件
     */
    baseWidgets: EditorComponent[]
    /**
     * @description 容器组件
     */
    containerComponents: EditorComponent[]
}

/**
 * @description 当前被操作的组件
 */
export interface EditorBlockData {
    /**
     * @description 唯一标识
     */
    UUID?: string
    /**
     * @description 组件的名称
     */
    label: string
    /**
     * @description 组件所属的模块（基础组件、容器组件）
     * 可选值: keyof ComponentModules
     */
    moduleName: keyof ComponentModules
}
