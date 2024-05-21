/**
 * @description 用于判断是否为一个正确的 dom 对象
 * @import import { isDom } from '@lowcode/shared'
 * @param el dom 对象
 * @returns {boolean|undefined}
 */
export const isDom = <T extends HTMLElement>(el?: T): boolean | undefined => {
    const HTMLIsObject =
        typeof HTMLElement === 'object' ? el instanceof HTMLElement : el
    const typeOfNodeName =
        typeof el === 'object' &&
        el?.nodeType !== undefined &&
        typeof el.nodeName === 'string'

    return HTMLIsObject && typeOfNodeName
}
