import type { App, Plugin } from 'vue'

// 类型必须导出否则生成不了.d.ts文件
export type SFCWithInstall<T> = T & Plugin

// 定义组件的默认属性
interface Comp {
    name: string
}

/**
 * 为 vue 组件设置安装方法
 * @param comp vue 组件 实例
 * @returns {SFCWithInstall<T>}
 */
export const withInstall = <T extends Comp>(comp: T): SFCWithInstall<T> => {
    // eslint-disable-next-line prettier/prettier
    ;(comp as SFCWithInstall<T>).install = (app: App): void => {
        app.component(comp.name, comp)
    }

    return comp as SFCWithInstall<T>
}
