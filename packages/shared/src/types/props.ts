import type { EditorPropsType } from '../enum'
import type { FormItemProps, SelectProps } from 'ant-design-vue'

export type SelectOptions = SelectProps['options']

export type EditorProps = {
    // 默认值
    defaultValue?: unknown
    // 表单项标签名称
    label: string
    // placeholder
    placeholder?: string
    // 提示文案
    tips?: string
    // 渲染的表单类型
    type: EditorPropsType
} & {
    // select 的 options
    options?: SelectOptions
} & {
    // 表单验证规则
    rules?: FormItemProps['rules']
}

export type EditorFormItemProps = EditorProps & {
    // 表单项绑定的 prop
    propName: string
}
