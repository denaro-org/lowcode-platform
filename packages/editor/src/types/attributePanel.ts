import type { EditorProps } from '@lowcode/shared'
import type { TabPaneProps } from 'ant-design-vue'
import type { Property } from 'csstype'
import type { VNode } from 'vue'

// 子组件的配置
export interface ChildrenConfig {
    // 绑定的唯一 key
    key: string
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

/* 右侧 Flex 弹性布局的配置 */
export type FlexStyleConfig =
    | FlexDirection
    | FlexWrap
    | AlignContent
    | JustifyContent
    | AlignItems

type FlexOptions<T> = Array<{
    // 图标
    icon?: string
    // 可以配置的值
    value: T
}>

// flex-direction 的配置
interface FlexDirection {
    defaultValue: 'row' | 'column'
    label: 'flex-direction'
    options: FlexOptions<Property.FlexDirection>
}

// flex-wrap 的配置
interface FlexWrap {
    defaultValue: 'nowrap' | 'wrap'
    label: 'flex-wrap'
    options: FlexOptions<Property.FlexWrap>
}

// align-content
interface AlignContent {
    defaultValue: 'normal' | 'flex-start' | 'flex-end'
    label: 'align-content'
    options: FlexOptions<Property.AlignContent>
}

// justify-content
interface JustifyContent {
    defaultValue: 'normal' | 'flex-start' | 'flex-end'
    label: 'justify-content'
    options: FlexOptions<Property.JustifyContent>
}

// align-items
interface AlignItems {
    defaultValue: 'normal' | 'flex-start' | 'flex-end'
    label: 'align-items'
    options: FlexOptions<Property.AlignItems>
}

export type FlexStyleValue =
    | Property.FlexDirection
    | Property.FlexWrap
    | Property.AlignContent
    | Property.JustifyContent
    | Property.AlignItems
