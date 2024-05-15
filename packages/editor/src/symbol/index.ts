import type { UseAppDSL } from '@/types'
import type { EditorComponent } from '@lowcode/shared'
import type { InjectionKey } from 'vue'

// 依赖注入的标识符
// ui schema
export const UISchemaSymbol: InjectionKey<EditorComponent[]> =
    Symbol('uiSchema')

// preview url
export const PreviewUrlSymbol: InjectionKey<string> = Symbol('previewUrl')

// initDSLData
export const InitDSLDataSymbol: InjectionKey<UseAppDSL> = Symbol('initDSLData')
