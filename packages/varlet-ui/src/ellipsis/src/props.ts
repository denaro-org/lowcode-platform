import type { EllipsisProps } from '@varlet/ui'
import type { PropType } from 'vue'

// 扩展组件的一些 props 配置
export interface TmVarEllipsisConfig extends EllipsisProps {
    // 文案
    text?: string
}

export const varEllipsisProps = {
    config: {
        type: Object as PropType<TmVarEllipsisConfig>,
        default: () => ({})
    }
}
