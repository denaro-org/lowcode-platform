import type { VNode } from 'vue'

/**
 * @description VNode 集合
 * @type {string} T 键名
 */
export type VNodes<T extends string = string> = Record<T, VNode>
