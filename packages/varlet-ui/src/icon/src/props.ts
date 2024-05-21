import type { IconProps } from '@varlet/ui'
import type { PropType } from 'vue'

// 扩展组件的一些 props 配置
export interface TmVarIconConfig extends IconProps {
    //
}

export const varIconProps = {
    config: {
        type: Object as PropType<TmVarIconConfig>,
        default: () => ({})
    }
}
