import type { TmVarButtonConfig } from '@/button/src/props'
import type { ButtonGroupProps } from '@varlet/ui'
import type { PropType } from 'vue'

// 扩展组件的一些 props 配置
export interface TmVarButtonGroupConfig extends ButtonGroupProps {
    // 子按钮配置
    childrenConfig?: TmVarButtonConfig[]
}

export const varButtonGroupProps = {
    config: {
        type: Object as PropType<TmVarButtonGroupConfig>,
        default: () => ({})
    }
}
