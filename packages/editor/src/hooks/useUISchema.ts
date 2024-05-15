import type { UseAppDSL, UseUISchema } from '@/types'
import type { EditorComponent } from '@lowcode/shared'

import { computed, inject } from 'vue'

import { UISchemaSymbol } from '@/symbol'

export const useUISchema = (
    currentBlock: UseAppDSL['currentBlock']
): UseUISchema => {
    const uiSchema = inject<EditorComponent[]>(UISchemaSymbol as symbol)

    return {
        currentSchema: computed(
            () =>
                uiSchema?.find(
                    item => item.key === currentBlock.value.componentKey
                    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                ) ?? ({} as EditorComponent)
        )
    }
}
