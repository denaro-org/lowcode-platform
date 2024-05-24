import type { NavItem } from '@/types'

/**
 * @description 移动端的默认尺寸
 */
export const MOBILE_SIZE = {
    width: 375,
    height: 812
}

/**
 * @description 本地缓存枚举
 */
export enum CacheEnum {
    APP_DSL = 'APP_DSL'
}

/**
 * @description 侧边栏默认选中
 */
export const NavDefaultValue: NavItem['name'] = 'data-source'
