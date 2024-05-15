import AttrPanel from './components/AttrPanel.vue'
import EventPanel from './components/EventPanel.vue'
import StylePanel from './components/StylePanel.vue'

export const tabList = [
    {
        tab: '属性',
        tabKey: 'attr',
        component: AttrPanel
    },
    {
        tab: '样式',
        tabKey: 'style',
        component: StylePanel
    },
    {
        tab: '事件',
        tabKey: 'event',
        component: EventPanel
    }
]
