import { isDom } from './is.utils'

/**
 * @description 执行  document.execCommand('copy') 方法
 * @import import { handleCopy } from '@lowcode/shared'
 * @param str 需要复制的内容
 * @param callback 复制成功后的回调函数
 */
interface CopyOptions {
    callback?: (str: string) => void
    str: string
}
export const handleCopy = ({ str, callback }: CopyOptions): void => {
    const textareaEl = document.createElement('textarea') // 创建一个元素
    textareaEl.value = str // 将需要复制的内容传给该元素作为文本
    document.body.appendChild(textareaEl)
    textareaEl.select() // 自动选中
    document.execCommand('copy') // 这个命令会将选中的内容复制到粘贴板中
    document.body.removeChild(textareaEl)

    // 执行回调函数
    callback instanceof Function && callback(str)
}

/**
 * @description 用于获取 iframe 中的某个标签对象
 * @import import { getIframeHtmlByTagName } from '@lowcode/shared'
 * @param nodeStr 选择器
 * @param iframe iframe 元素
 * @returns {HTMLElement} 返回一个元素对象
 */
export const getIframeHtmlByTagName = (
    iframe: HTMLIFrameElement,
    tagName: string
): HTMLElement => {
    // 用于判断 iframe 节点的标签名是否为 iframe
    if (isDom(iframe) && iframe.tagName.toLowerCase() === 'iframe') {
        // 获取 iframe 中的文档对象
        const iframeDocument =
            iframe.contentDocument ?? iframe?.contentWindow?.document

        // 转换成 dom 对象, 返回类型为 HTMLElement
        const iframeDom = iframeDocument?.getElementsByTagName(
            tagName
        )[0] as HTMLElement

        return iframeDom
    } else {
        throw new Error('非 iframe dom 对象')
    }
}
