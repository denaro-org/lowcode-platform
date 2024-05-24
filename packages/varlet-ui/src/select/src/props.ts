import type { OptionProps, SelectProps } from '@varlet/ui'
import type { PropType } from 'vue'

// 扩展组件的一些 props 配置
export interface TmVarSelectConfig extends SelectProps {
    // 下拉选项
    options?: OptionProps[]
}

export const varSelectProps = {
    config: {
        type: Object as PropType<TmVarSelectConfig>,
        default: () => ({})
    }
}
