import type {
    AppDSL,
    EditorBlock,
    EditorComponent,
    EditorPage
} from '@lowcode/shared'
import type { ComputedRef, DeepReadonly, VNode } from 'vue'

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
     */
    initAppDSL: () => void
    /**
     * @description 重置 appDSL
     */
    resetAppDSL: () => void
    /**
     * @description 设置当前被操作的组件
     * @param {EditorBlock} block  当前被操作的组件配置
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

/**
 * @description component 动态组件绑定值
 */
export interface ComponentBind {
    /**
     * @description 绑定的 props
     */
    bindProps?: {
        /**
         * @description 关闭时销毁子元素
         */
        destroyOnClose?: boolean
        /**
         * @description 标题
         */
        title?: string
    } & Record<string, unknown>
    /**
     * @description 绑定的 Vue 组件
     */
    name: VNode | null
    /**
     * @description 是否是打开状态
     */
    open?: boolean
}

/**
 * @description 组件名集合
 */
export type ComponentBindName = 'canvasSettings' | 'previewDialog' | 'seeCode'

/**
 * @description openComponent 方法的参数值
 */
export interface BindConfig extends Omit<ComponentBind, 'name'> {
    /**
     * @description 配置要展示的组件名
     */
    name: ComponentBindName
}

/**
 * @description useOpenModel 方法的返回值
 */
export interface UseOpenModel {
    /**
     * @description component 动态组件绑定值
     */
    componentBind: ComputedRef<ComponentBind>
    /**
     * @description 用于同步 componentBind 绑定值, 并且打开或者关闭组件
     * @param {BindConfig} bindConfig 配置
     */
    openComponent: (bindConfig: BindConfig) => void
}
