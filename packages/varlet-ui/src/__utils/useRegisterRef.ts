import type { VNode } from 'vue'

// 向 window.$$refs 注册 ref
export const useRegisterRef = (el: VNode, uuid: string): void => {
    el && (window.$$refs[uuid] = el)
}
