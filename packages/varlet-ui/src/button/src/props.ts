import type { ButtonProps } from '@varlet/ui'
import type { PropType } from 'vue'

// 扩展组件的一些 props 配置
export interface TmVarButtonConfig extends ButtonProps {
    // 按钮文案
    buttonText?: string
}

export const varButtonProps = {
    config: {
        type: Object as PropType<TmVarButtonConfig>,
        default: () => ({})
    }
}
