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
    // 多个 addonAfter，目前仅适用于 type 为 inputNumber 的表单项
    addonAfters?: string[]
    // 默认值
    defaultValue?: unknown
    // 用于定义表单项显隐的函数
    display?: ({ model }: { model: Record<string, unknown> }) => boolean
    // 表单项标签名称
    label?: string
    // 绑定给 antd 的表单项 props 配置
    propsBind?: T & {
        // 绑定的事件
        on?: OnEvent
    }
    // 是否使用 propsBind 的 addonAfter 来补充单位（一般是绑定到 style 上的单位），目前仅适用于 type 为 inputNumber 的表单项
    useAddonAfter?: boolean
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
    // 开启 useAddonAfter 表单项绑定的 prop
    __propName__?: string
    // 子项配置
    children?: EditorProps[]
    // 表单项绑定的 prop
    propName: string
}

// 绑定的事件
export type OnEvent = Partial<
    Record<'onChange' | 'onClick', (args: unknown) => void>
>
