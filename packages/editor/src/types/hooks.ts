import type {
    AppDSL,
    EditorBlock,
    EditorComponent,
    EditorPage
} from '@lowcode/shared'
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
    // 初始化 DSL
    initAppDSL: () => void
    // 设置当前被操作的组件
    setCurrentBlock: (block: EditorBlock) => void
}

export interface UseUISchema {
    // 当前操作的组件配置
    currentSchema: ComputedRef<EditorComponent>
}
