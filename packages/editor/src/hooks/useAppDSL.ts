import type { IState, UseAppDSL } from '@/types'
import type { AppDSL, EditorBlock } from '@lowcode/shared'

import { computed, inject, reactive, readonly } from 'vue'

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
     * @returns void
     */
    const setCurrentBlock = (block: EditorBlock): void => {
        state.currentBlock = block
        updateAppDSL(state.appDSL as AppDSL)
    }

    /**
     * @description 更新本地存储的 appDSL
     * @param {AppDSL} appDSL appDSL
     * @returns void
     */
    const updateAppDSL = (appDSL: AppDSL): void => {
        localStorage.setItem(localKey, JSON.stringify(appDSL))
    }

    /**
     * @description 初始化 DSL
     * @returns void
     */
    const initAppDSL = (): void => {
        window.addEventListener('beforeunload', () => {
            sessionStorage.setItem(localKey, JSON.stringify(appDSL))
        })
    }

    return {
        appDSL: readonly(state.appDSL),
        currentPage: computed(() => state.currentPage),
        currentBlock: computed(() => state.currentBlock),
        setCurrentBlock,
        initAppDSL
    }
}

/**
 * @description DSL 数据操作的 hooks 注入
 * @returns {UseAppDSL}
 */
export const useAppDSL = (): UseAppDSL =>
    inject<UseAppDSL>(InitDSLDataSymbol as symbol) as UseAppDSL
