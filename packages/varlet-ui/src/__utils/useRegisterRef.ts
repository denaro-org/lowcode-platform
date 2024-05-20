import type { VNode } from 'vue'

/**
 * @description 向 window.$$refs 注册 ref
 * @param {VNode} el 元素节点
 * @param {string} uuid 唯一的 uuid
 */
export const useRegisterRef = (el: VNode, uuid: string): void => {
    el && (window.$$refs[uuid] = el)
}
