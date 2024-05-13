import TmVarletUI from '@lowcode/varlet-ui'
import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)

app.use(TmVarletUI)
app.mount('#app')
