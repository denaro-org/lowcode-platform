import type { UseAppDSL, UseOpenModel } from '@/types'
import type { EditorComponent } from '@lowcode/shared'
import type { InjectionKey } from 'vue'

// 依赖注入的标识符

// uiSchema
export const UISchemaSymbol: InjectionKey<EditorComponent[]> =
    Symbol('uiSchema')

// previewUrl
export const PreviewUrlSymbol: InjectionKey<string> = Symbol('previewUrl')

// initDSLData
export const InitDSLDataSymbol: InjectionKey<UseAppDSL> = Symbol('initDSLData')

// initOpenModel
export const InitOpenModelSymbol: InjectionKey<UseOpenModel> =
    Symbol('initOpenModel')
