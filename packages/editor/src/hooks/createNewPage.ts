import type { EditorPage } from '@lowcode/shared'

// 创建一个空白的页面
export const createNewPage = ({
    title = '新页面',
    path = '/'
}): EditorPage => ({
    title,
    path,
    blocks: [],
    type: 'page'
})
