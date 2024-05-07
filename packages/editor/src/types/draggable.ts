import type { EditorBlock } from '@lowcode/shared'

export interface DraggableChangeVal {
    // 新增内容
    added: {
        // 新增的元素配置
        element: EditorBlock
    }
    // 新增的下标
    newIndex: number
}
