import type {
    AppDSL,
    EditorBlock,
    EditorComponent,
    EditorPage
} from '@lowcode/shared'
import type { ComputedRef, DeepReadonly } from 'vue'

/**
 * @description state 类型
 */
export interface IState {
    /**
     * @description DSL, 不可被直接修改
     */
    appDSL: AppDSL
    /**
     * @description 当前编辑的组件配置
     */
    currentBlock: EditorBlock
    /**
     * @description 当前被操作的页面
     */
    currentPage: EditorPage
}

/**
 * @description useAppDSL 函数返回值
 */
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
     */
    currentPage: ComputedRef<EditorPage>
    /**
     * @description 初始化 DSL
     * @returns void
     */
    initAppDSL: () => void
    /**
     * @description 设置当前被操作的组件
     * @param {EditorBlock} block  当前被操作的组件配置
     * @returns void
     */
    setCurrentBlock: (block: EditorBlock) => void
}

/**
 * @description useUISchema 函数返回值
 */
export interface UseUISchema {
    /**
     * @description 当前操作的组件配置
     */
    currentSchema: ComputedRef<EditorComponent>
}

/**
 * @description 使用 xx.xx 的写法的类型
 */
export interface UseDotProp {
    /**
     * @description 是否是 xx.xx 的写法
     */
    isDotProp: boolean
    /**
     * @description 属性名
     */
    prop: string
    /**
     * @description 属性所在的对象
     */
    propObj: Record<string, unknown>
}
