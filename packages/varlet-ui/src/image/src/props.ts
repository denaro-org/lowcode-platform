import type { ImageProps } from '@varlet/ui'
import type { PropType } from 'vue'

// 扩展组件的一些 props 配置
export interface TmVarImagesConfig extends ImageProps {
    //
}

export const varImageProps = {
    config: {
        type: Object as PropType<TmVarImagesConfig>,
        default: () => ({})
    }
}
