import type { IState, UseAppDSL } from '@/types'
import type { AppDSL, EditorBlock, EditorPage } from '@lowcode/shared'

import { computed, inject, reactive } from 'vue'

import { createNewPage } from './createNewPage'

import { CacheEnum } from '@/config'
import { InitDSLDataSymbol } from '@/symbol'

// 保存到本地JSON数据的key
const localKey: string = CacheEnum.APP_DSL

const defaultValue: AppDSL = {
    type: 'app',
    pages: {
        // 页面
        '/': createNewPage({ title: '首页' })
    },
    dataSources: []
}

/**
 * @description DSL 数据操作的 hooks
 * @returns {UseAppDSL}
 */
export const initDSLData = (): UseAppDSL => {
    const localData: AppDSL = JSON.parse(localStorage.getItem(localKey) ?? '{}')
    const appDSL: AppDSL = Object.keys(localData?.pages ?? {}).length
        ? localData
        : defaultValue

    const currentPage = appDSL.pages['/']

    const state: IState = reactive({
        appDSL,
        currentPage,
        currentBlock:
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            currentPage?.blocks?.find(item => item.focus) ?? ({} as EditorBlock)
    })

    /**
     * @description 设置当前被操作的组件
     * @param {EditorBlock} block  当前被操作的组件配置
     */
    const setCurrentBlock = (block: EditorBlock): void => {
        state.currentBlock = block
    }

    /**
     * @description 更新pages下面的blocks
     * @param {string} path 页面路径
     * @param {EditorBlock[]} blocks 页面下的 blocks 配置
     */
    const updatePageBlock = (path = '', blocks: EditorBlock[] = []): void => {
        state.appDSL.pages[path].blocks = blocks
    }

    /**
     * @description 设置当前被操作的页面
     * @param {EditorPage} page 当前被操作的页面配置
     */
    const setCurrentPage = (page: EditorPage): void => {
        state.currentPage = page
    }

    /**
     * @description 初始化 DSL
     * @param {AppDSL} appDSL appDSL
     */
    const initAppDSL = (appDSL: AppDSL): void => {
        window.addEventListener('beforeunload', () => {
            sessionStorage.setItem(localKey, JSON.stringify(appDSL))
        })
    }

    /**
     * @description 使用自定义JSON覆盖整个项目
     * @param {AppDSL} appDSL appDSL
     */
    const overrideProject = (appDSL: AppDSL): void => {
        state.appDSL = typeof appDSL === 'string' ? JSON.parse(appDSL) : appDSL
        sessionStorage.setItem(localKey, JSON.stringify(appDSL))
    }

    /**
     * @description 重置 appDSL
     */
    const resetAppDSL = (): void => {
        overrideProject(defaultValue)
        setCurrentPage(defaultValue.pages['/'] ?? {})
        setCurrentBlock(defaultValue.pages['/'].blocks[0] ?? {})
    }

    return {
        appDSL: computed(() => state.appDSL),
        currentPage: computed(() => state.currentPage),
        currentBlock: computed(() => state.currentBlock),
        setCurrentBlock,
        setCurrentPage,
        overrideProject,
        initAppDSL,
        resetAppDSL,
        updatePageBlock
    }
}

/**
 * @description DSL 数据操作的 hooks 注入
 * @returns {UseAppDSL}
 */
export const useAppDSL = (): UseAppDSL =>
    inject<UseAppDSL>(InitDSLDataSymbol as symbol) as UseAppDSL
