import type { AppDSL } from './dsl'
import type { bus } from 'wujie'

/**
 * @description 无界的事件 bus
 */
export type WujieBus = typeof bus

/**
 * @description 无界的 props
 */
export interface WujieProps {
    /**
     * @description appDSL 不可被直接修改
     */
    appDSL: AppDSL
    /**
     * @description 当前页面路径
     */
    path: string
}
