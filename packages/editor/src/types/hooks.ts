import type {
    AppDSL,
    EditorBlock,
    EditorComponent,
    EditorPage
} from '@lowcode/shared'
import type { ComputedRef, DeepReadonly } from 'vue'

export interface IState {
    // DSL, 不可被直接修改
    appDSL: AppDSL
    // 当前编辑的组件配置
    currentBlock: EditorBlock
    // 当前被操作的页面
    currentPage: EditorPage
}

export interface UseAppDSL {
    /**
     * @description DSL, 不可被直接修改
     */
    appDSL: DeepReadonly<AppDSL>
    /**
     * @description 当前页面
     */
    currentBlock: ComputedRef<EditorBlock>
    /**
     * @description 设置当前被操作的组件
     * @param {EditorBlock} block  当前被操作的组件配置
     */
    currentPage: ComputedRef<EditorPage>
    /**
     * @description 初始化 DSL
     */
    initAppDSL: () => void
    /**
     * @description 设置当前被操作的组件
     * @param {EditorBlock} block  当前被操作的组件配置
     */
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
