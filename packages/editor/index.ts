import type { App } from 'vue'

import LowCodeEditor from './src/LowCodeEditor.vue'

LowCodeEditor.install = (app: App): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    app.component(LowCodeEditor.name ?? 'LowCodeEditor', LowCodeEditor)
}

export { LowCodeEditor }

export type * from './src/types/index.js'
