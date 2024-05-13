import Vue, { type VNode } from 'vue'
import type { WujieProps, WujieBus } from '@lowcode/shared'

type VVue = typeof Vue

declare global {
    namespace JSX {
        // tslint:disable no-empty-interface
        interface Element extends VNode { }
        // tslint:disable no-empty-interface 
        interface ElementClass extends VVue { }
        interface ElementAttributesProperty {
            $props: any;
        }
        interface IntrinsicElements {
            [elem: string]: any
        }
        interface IntrinsicAttributes {
            [elem: string]: any;
        }
    }

    interface Window {
        // 是否存在无界
        __POWERED_BY_WUJIE__?: boolean
        // 子应用公共加载路径
        __WUJIE_PUBLIC_PATH__: string
        // 原生的querySelector
        __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__: typeof Document.prototype.querySelector
        // 原生的querySelectorAll
        __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__: typeof Document.prototype.querySelectorAll
        // 原生的window对象
        __WUJIE_RAW_WINDOW__: Window
        // 子应用mount函数
        __WUJIE_MOUNT: () => void
        // 子应用unmount函数
        __WUJIE_UNMOUNT: () => void
        // 子应用无界实例
        __WUJIE: { mount: () => void }
        // 注入对象
        $wujie: {
            bus: WujieBus;
            shadowRoot?: ShadowRoot
            props?: WujieProps
            location?: Object
        }
    }
} 