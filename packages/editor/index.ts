import type { App } from 'vue'

import LowCodeEditor from '@/LowCodeEditor.vue'
import LowCodePreview from '@/LowCodePreview.vue'

LowCodeEditor.install = (app: App): void => {
    app.component(LowCodeEditor.name ?? 'LowCodeEditor', LowCodeEditor)
}

LowCodePreview.install = (app: App): void => {
    app.component(LowCodePreview.name ?? 'LowCodePreview', LowCodePreview)
}

export { LowCodeEditor, LowCodePreview }

export type * from './src/types/index.js'
