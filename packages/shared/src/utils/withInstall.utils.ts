import type { App, Component, Plugin } from 'vue'

export type ComponentWithInstall<T> = T & Plugin

/**
 * 为 vue 组件设置安装方法
 * @param comp vue 组件 实例
 * @returns {SFCWithInstall<T>}
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
