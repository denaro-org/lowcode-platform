import type { IState, UseAppDSL } from '@/types/index.js'
import type { AppDSL, EditorBlock } from '@lowcode/shared'

import { computed, reactive, readonly } from 'vue'

import { createNewPage } from './createNewPage.js'

import { CacheEnum } from '@/config/index.js'

// 保存到本地JSON数据的key
export const localKey: string = CacheEnum.APP_DSL

const defaultValue: AppDSL = {
    type: 'app',
    pages: {
        // 页面
        '/': createNewPage({ title: '首页' })
    }
}

export const useAppDSL = (): UseAppDSL => {
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

    // 设置当前被操作的组件
    const setCurrentBlock = (block: EditorBlock): void => {
        state.currentBlock = block
        updateAppDSL(state.appDSL as AppDSL)
    }

    // 更新本地存储的 appDSL
    const updateAppDSL = (appDSL: AppDSL): void => {
        localStorage.setItem(localKey, JSON.stringify(appDSL))
    }

    // 初始化 DSL
    const initAppDSL = (): void => {
        if (Object.keys(localData).length === 0) {
            updateAppDSL(appDSL)
        }
    }

    return {
        appDSL: readonly(state.appDSL),
        currentPage: computed(() => state.currentPage),
        currentBlock: computed(() => state.currentBlock),
        setCurrentBlock,
        initAppDSL
    }
}