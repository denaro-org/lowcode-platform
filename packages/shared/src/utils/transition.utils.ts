/**
 * @description 导出定义为数据转换的函数
 */

import type { Options as Html2canvasOptions } from 'html2canvas'

import html2canvas from 'html2canvas'
import { isNumber, isUndefined } from 'lodash-es'

import { getIframeHtmlByTagName } from './dom.utils'
import { isDom } from './is.utils'

/**
 * @description 用于同时兼容数字类型和字符串类型的 size
 * @import import { normalizeSize } from '@lowcode/shared'
 * @param {String|Number} size size 大小
 * @returns {string}
 */
export const normalizeSize = (
    size: string | number,
    unit?: string
): string | undefined => {
    if (isUndefined(size)) return undefined
    if (!isNumber(size) && /^\d+(%)$/.test(String(size))) return size

    const num = parseInt(String(size), 10)

    return isNumber(num) ? `${num}${unit ?? 'px'}` : undefined
}

/**
 * @description HTML 的 DOM 转成图片
 * @import import { saveDomAsImg } from '@lowcode/shared'
 * @param {HTMLElement} el dom 对象
 * @returns {string} 转换为数据 URL 的图片
 */
export const saveDomAsImg = async <T extends HTMLElement>(
    el: T,
    { width, height, useCORS, ...args }: Partial<Html2canvasOptions>,
    fileNames?: string
): Promise<string> => {
    if (!isDom(el)) throw new Error('el 不是一个正确的 dom 对象')

    try {
        let dom: HTMLElement = el
        let x = 0
        let y = 0

        // 特殊处理 iframe 的元素
        if (dom instanceof HTMLIFrameElement) {
            const iframeHtml = dom?.contentWindow
            if (!iframeHtml) throw new Error('cloneWindow is null')

            const iframeBody = getIframeHtmlByTagName(dom, 'body')
            x = iframeHtml.document.documentElement.scrollTop
            y = iframeHtml.document.documentElement.scrollLeft

            dom = iframeBody
        }

        const canvas = await html2canvas(dom, {
            width,
            height,
            allowTaint: true,
            useCORS: useCORS ?? true,
            x,
            y,
            ...args
        })
        const dataURL = canvas.toDataURL('image/png')

        // 创建一个 <a> 元素，设置下载链接
        const a = document.createElement('a')
        a.href = dataURL // 将 canvas 转换为数据 URL
        a.download = fileNames ? `${fileNames}.png` : `${width}*${height}.png` // 设置文件名

        // 将 <a> 元素添加到文档中并模拟点击
        document.body.appendChild(a)
        a.click()

        // 清理临时元素
        document.body.removeChild(a)

        return dataURL
    } catch (error: unknown) {
        throw new Error(String(error))
    }
}
