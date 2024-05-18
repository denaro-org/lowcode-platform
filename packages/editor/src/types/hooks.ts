import type {
    AppDSL,
    EditorBlock,
    EditorComponent,
    EditorPage
} from '@lowcode/shared'
import type { ComputedRef, DeepReadonly } from 'vue'

export interface IState {
    // DSL，不可被直接修改
    appDSL: AppDSL
    // 当前编辑的组件配置
    currentBlock: EditorBlock
    // 当前被操作的页面
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

export interface UseDotProp {
    // 是否是 xx.xx 的写法
    isDotProp: boolean
    // 属性名
    prop: string
    // 属性所在的对象
    propObj: Record<string, unknown>
}
