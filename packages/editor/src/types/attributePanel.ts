import type { EditorProps } from '@lowcode/shared'
import type { TabPaneProps } from 'ant-design-vue'
import type { Property } from 'csstype'
import type { VNode } from 'vue'

/**
 * @description 右侧属性栏中的子组件配置
 */
export interface ChildrenConfig {
    /**
     * @description 绑定的唯一 key
     */
    key: string
    /**
     * @description 组件的 props 配置
     */
    props?: Record<string, EditorProps>
    /**
     * @description 显示的标题
     */
    title: string
}

/**
 * @description 右侧切换面板的配置
 */
export interface TabListItem extends TabPaneProps {
    /**
     * @description 子组件的配置
     */
    childrenConfig?: ChildrenConfig[]
    /**
     * @description 渲染的组件
     */
    component: VNode
}

/**
 * @description 右侧 Flex 弹性布局的配置
 */
export type FlexStyleConfig =
    | FlexDirection
    | FlexWrap
    | AlignContent
    | JustifyContent
    | AlignItems

/**
 * @description flex 子项配置
 */
type FlexOptions<T> = Array<{
    /**
     * @description 图标
     */
    icon?: string
    /**
     * @description 可以配置的值
     */
    value: T
}>

/**
 * @description flex-direction 的配置
 */
interface FlexDirection {
    defaultValue: 'row' | 'column'
    label: 'flex-direction'
    options: FlexOptions<Property.FlexDirection>
}

/**
 * @description flex-wrap 的配置
 */
interface FlexWrap {
    defaultValue: 'nowrap' | 'wrap'
    label: 'flex-wrap'
    options: FlexOptions<Property.FlexWrap>
}

/**
 * @description align-content 的配置
 */
interface AlignContent {
    defaultValue: 'normal' | 'flex-start' | 'flex-end'
    label: 'align-content'
    options: FlexOptions<Property.AlignContent>
}

/**
 * @description justify-content 的配置
 */
interface JustifyContent {
    defaultValue: 'normal' | 'flex-start' | 'flex-end'
    label: 'justify-content'
    options: FlexOptions<Property.JustifyContent>
}

/**
 * @description align-items的配置
 */
interface AlignItems {
    defaultValue: 'normal' | 'flex-start' | 'flex-end'
    label: 'align-items'
    options: FlexOptions<Property.AlignItems>
}

/**
 * @description flex 属性配置值类型
 */
export type FlexStyleValue =
    | Property.FlexDirection
    | Property.FlexWrap
    | Property.AlignContent
    | Property.JustifyContent
    | Property.AlignItems
