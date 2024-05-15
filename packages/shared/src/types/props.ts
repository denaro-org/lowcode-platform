import type { EditorPropsType } from '../enum'

export interface EditorProps {
    // 默认值
    defaultValue?: unknown
    // 表单项标签名称
    label: string
    // 提示文案
    tips?: string
    // 渲染的表单类型
    type: EditorPropsType
}
