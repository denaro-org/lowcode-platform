import type { varEllipsisProps } from '@/ellipsis/props'
import type { ExtractPropTypes } from 'vue'

// 导出组件配置的类型
export type TmVarEllipsisProps = ExtractPropTypes<typeof varEllipsisProps>
