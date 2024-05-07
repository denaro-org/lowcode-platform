import type { AppDSL, EditorBlock, EditorPage } from '@lowcode/shared'
import type { ComputedRef, DeepReadonly } from 'vue'

export interface IState {
    appDSL: AppDSL
    currentBlock: EditorBlock
    currentPage: EditorPage
}

export interface UseAppDSL {
    // DSL，不可被直接修改
    appDSL: DeepReadonly<AppDSL>
    // 当前页面
    currentBlock: ComputedRef<EditorBlock>
    // 当前被操作的组件
    currentPage: ComputedRef<EditorPage>
    // 设置当前被操作的组件
    setCurrentBlock: (block: EditorBlock) => void
}
