import type { App } from 'vue'

import TmVarletUI from '@lowcode/varlet-ui'
import { createApp } from 'vue'

import AppVue from './App.vue'

// 无界的生命周期改造
if (window.__POWERED_BY_WUJIE__) {
    let instance: App
    window.__WUJIE_MOUNT = () => {
        instance = createApp(AppVue)
        instance.use(TmVarletUI)
        instance.mount('#app')
    }
    window.__WUJIE_UNMOUNT = () => {
        instance.unmount()
    }
    /*
      由于vite是异步加载，而无界可能采用fiber执行机制
      所以mount的调用时机无法确认，框架调用时可能vite
      还没有加载回来，这里采用主动调用防止用没有mount
      无界mount函数内置标记，不用担心重复mount
    */
    window.__WUJIE.mount()
} else {
    const app = createApp(AppVue)
    app.use(TmVarletUI)
    app.mount('#app')
}
