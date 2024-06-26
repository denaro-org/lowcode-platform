import type {
    ComponentModules,
    DataSourceCategory,
    EditorProps
} from '@lowcode/shared'
import type { SelectProps } from 'ant-design-vue'
import type { VNode } from 'vue'

/**
 * @description 侧边栏的配置
 */
export interface NavItem {
    /**
     * @description 渲染的组件
     */
    component: VNode
    /**
     * @description 图标
     */
    icon?: VNode
    /**
     * @description 文案
     */
    label: string
    /**
     * @description 组件所属的模块（基础组件、容器组件）
     * 可选值: keyof ComponentModules
     */
    moduleName?: keyof ComponentModules
    /**
     * @description 分类名称
     */
    name: 'page' | 'basic-components' | 'container-components' | 'data-source'
}

/**
 * @description 侧边栏配置集合
 */
export type NavConfig = NavItem[]

/**
 * @description 数据源分类下拉
 */
export type DataSourceCategorys = SelectProps['options'] &
    Array<{
        value: DataSourceCategory
    }>

/**
 * @description 数据源表单配置
 */
export type DataSourceConfig = Record<
    DataSourceCategory,
    Record<string, EditorProps>
>
