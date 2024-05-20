import type { EditorPage } from '@lowcode/shared'

/**
 * @description 创建一个空白的页面
 * @param {string} title 页面标题
 * @param {string} path 页面路径
 * @returns {EditorPage}
 */
export const createNewPage = ({
    title = '新页面',
    path = '/'
}): EditorPage => ({
    title,
    path,
    blocks: [],
    type: 'page'
})
