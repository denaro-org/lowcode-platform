import type { ComponentModules } from './editor'
import type {
    CheckboxProps,
    InputNumberProps,
    InputProps,
    RadioProps,
    SelectProps,
    SwitchProps
} from 'ant-design-vue'
import type { CSSProperties } from 'vue'

/**
 * @description 组件节点 props 绑定的值
 */
export type PropValue = SelectProps['value'] &
    InputProps['value'] &
    InputNumberProps['value'] &
    RadioProps['checked'] &
    SwitchProps['checked'] &
    CheckboxProps['checked']

/**
 * @description 组件的 props 配置
 */
export type BlockProps = Record<string, PropValue>

/**
 * @description 组件节点类型
 */
export interface EditorBlock {
    /**
     * @description 唯一的 id, 自动生成无需手动配置
     */
    UUID: string
    /**
     * @description 组件英文名字
     */
    componentKey: string
    /**
     * @description 是否可被进行拖拽
     */
    draggable: boolean
    /**
     * @description 激活状态
     */
    focus?: boolean
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
     * @description 组件的 props 配置
     */
    props: BlockProps
    /**
     * @description 组件绑定样式
     */
    styles?: CSSProperties & Record<string, string>
    /**
     * @description 节点类型
     */
    type: 'block'
}

/**
 * @description 页面节点
 */
export interface EditorPage {
    /**
     * @description 当前页面的所有组件
     */
    blocks: EditorBlock[]
    /**
     * @description 页面路径
     */
    path: string
    /**
     * @description 页面节点绑定的样式
     */
    styles?: CSSProperties
    /**
     * @description 页面标题
     */
    title: string
    /**
     * @description 节点类型
     */
    type: 'page'
}

/**
 * @description 数据源
 */
export type DataSourceCategory = 'selectOptions'

/**
 * @description 数据源节点
 */
export interface DataSource {
    /**
     * @description 数据源的唯一 id
     */
    UUID: string
    /**
     * @description 数据源的类型分类, selectOptions 为下拉框数据源
     */
    category: DataSourceCategory
    /**
     * @description 数据源的配置值
     */
    config: SelectProps['options']
    /**
     * @description 数据源名称
     */
    name: string
    /**
     * @description 节点类型
     */
    type: 'data-source'
}

/**
 * @description 页面集合
 */
export type EditorPages = Record<string, EditorPage>

/**
 * @description AppDSL
 */
export interface AppDSL {
    /**
     * @description 数据源
     */
    dataSources: DataSource[]
    /**
     * @description 页面
     */
    pages: EditorPages
    /**
     * @description 节点类型
     */
    type: 'app'
}
