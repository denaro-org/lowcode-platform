import type { EditorBlock } from '@lowcode/shared'

/**
 * @description 拖拽组件的 change 函数回调值
 */
export interface DraggableChangeVal {
    /**
     * @description 新增内容
     */
    added: {
        /**
         * @description 新增的元素配置
         */
        element: EditorBlock
    }
    /**
     * @description 新增的下标
     */
    newIndex: number
}
