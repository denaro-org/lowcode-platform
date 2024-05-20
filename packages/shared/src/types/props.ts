import type { EditorPropsType } from '../enum'
import type {
    FormItemProps,
    InputNumberProps,
    InputProps,
    SelectProps,
    SwitchProps
} from 'ant-design-vue'

/**
 * @description 导出 Select 的 props
 */
export type SelectOptions = SelectProps['options']

/**
 * @description 使用创建方法来创建表单项的创建方法配置
 */
export interface UserPropConfig<T extends object> {
    /**
     * @description 多个 addonAfter, 目前仅适用于 type 为 inputNumber 的表单项
     */
    addonAfters?: string[]
    /**
     * @description 默认值
     */
    defaultValue?: unknown
    /**
     * @description 用于定义表单项显隐的函数
     * @param {Record<string, unknown>} model 绑定的表单值
     * @returns {boolean}
     */
    display?: ({ model }: { model: Record<string, unknown> }) => boolean
    /**
     * @description 表单项标签名称
     */
    label?: string
    /**
     * @description 绑定给 antd 的表单项 props 配置
     */
    propsBind?: T & {
        /**
         * @description 绑定的事件
         */
        on?: OnEvent
    }
    /**
     * @description 是否使用 propsBind 的 addonAfter 来补充单位（一般是绑定到 style 上的单位）, 目前仅适用于 type 为 inputNumber 的表单项
     */
    useAddonAfter?: boolean
}

/**
 * @description 创建方法的返回值类型
 */
export interface EditorProps<T extends object = object>
    extends UserPropConfig<T> {
    /**
     * @description 表单验证规则
     */
    rules?: FormItemProps['rules']
    /**
     * @description 渲染的表单类型
     */
    type: EditorPropsType
}

/**
 * @description 表单的 props 绑定值类型
 */
type PropsBind = SelectProps & InputProps & InputNumberProps & SwitchProps

/**
 * @description 表单项配置类型
 */
export type EditorFormItemProps = EditorProps<PropsBind> & {
    /**
     * @description 开启 useAddonAfter 表单项绑定的 prop, 自动生成
     */
    __propName__?: string
    /**
     * @description 一般指 group 类型的子项配置
     */
    children?: EditorProps[]
    /**
     * @description 表单项绑定的 prop, 自动生成
     */
    propName: string
}

/**
 * @description 绑定的事件
 */
export type OnEvent = Partial<
    Record<'onChange' | 'onClick', (args: unknown) => void>
>
