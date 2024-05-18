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

export type PropValue = SelectProps['value'] &
    InputProps['value'] &
    InputNumberProps['value'] &
    RadioProps['checked'] &
    SwitchProps['checked'] &
    CheckboxProps['checked']
export type BlockProps = Record<string, PropValue>

// 组件节点
export interface EditorBlock {
    // 唯一的 id, 自动生成无需手动配置
    UUID: string
    // 组件英文名字
    componentKey: string
    // 是否可被进行拖拽
    draggable: boolean
    // 激活状态
    focus?: boolean
    // 组件中文名字
    label: string
    // 组件所属的模块（基础组件、容器组件）
    moduleName: keyof ComponentModules
    // 组件的 props 配置
    props: BlockProps
    // 样式
    styles?: CSSProperties & Record<string, string>
}

// 页面节点
export interface EditorPage {
    // 当前页面的所有组件
    blocks: EditorBlock[]
    // 页面路径
    path: string
    // 样式
    styles?: CSSProperties
    // 页面标题
    title: string
    // 节点类型
    type: 'page'
}

// 页面集合
export type EditorPages = Record<string, EditorPage>

// appDSL
export interface AppDSL {
    // 页面
    pages: EditorPages
    // 节点类型
    type: 'app'
}
