import type { EditorPropsType } from '../enum'
import type {
    FormItemProps,
    InputNumberProps,
    InputProps,
    SelectProps,
    SwitchProps
} from 'ant-design-vue'

export type SelectOptions = SelectProps['options']

export interface UserPropConfig<T extends object> {
    // 默认值
    defaultValue?: unknown
    // 用于定义表单项显隐的函数
    display?: ({ model }: { model: Record<string, unknown> }) => boolean
    // 表单项标签名称
    label: string
    // 绑定给 antd 的表单项 props 配置
    propsBind?: T
}

export interface EditorProps<T extends object = object>
    extends UserPropConfig<T> {
    // 表单验证规则
    rules?: FormItemProps['rules']
    // 渲染的表单类型
    type: EditorPropsType
}

type PropsBind = SelectProps & InputProps & InputNumberProps & SwitchProps

export type EditorFormItemProps = EditorProps<PropsBind> & {
    // 表单项绑定的 prop
    propName: string
}
