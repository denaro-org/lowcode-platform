import type { App, Component, Plugin } from 'vue'

/**
 * @description withInstall 方法的返回值类型
 */
export type ComponentWithInstall<T> = T & Plugin

/**
 * 为 vue 组件设置安装方法
 * @param {Component} component vue 组件 实例
 * @param {T} target 自定义的组件注册方法
 * @returns {ComponentWithInstall<T>}
 */
export const withInstall = <T extends Component>(
    component: Component,
    target?: T
): ComponentWithInstall<T> => {
    const componentWithInstall = (target ??
        component) as ComponentWithInstall<T>

    componentWithInstall.install = (app: App): void => {
        const { name } = component

        if (name) {
            app.component(name, component)
        }
    }

    return componentWithInstall
}
