import type { AppDSL } from './dsl'
import type { bus } from 'wujie'

export type WujieBus = typeof bus

export interface WujieProps {
    // appDSL 不可被直接修改
    appDSL: AppDSL
    // 当前页面路径
    path: string
}
