import type { TabListItem } from '@/types'

import { createEditorNumberProp } from '@lowcode/shared'
import { h } from 'vue'

import AttrPanel from './components/AttrPanel.vue'
import EventPanel from './components/EventPanel.vue'
import StylePanel from './components/StylePanel.vue'

export const tabList: TabListItem[] = [
    {
        tab: '属性',
        tabKey: 'attr',
        component: h(AttrPanel)
    },
    {
        tab: '样式',
        tabKey: 'style',
        component: h(StylePanel),
        childrenConfig: [
            {
                title: '盒子',
                props: {
                    // 宽度
                    width: createEditorNumberProp({
                        label: '宽度',
                        tooltip: '设置当前选中元素的宽度',
                        propsBind: {
                            addonAfter: 'px'
                        }
                    }),
                    // 高度
                    height: createEditorNumberProp({
                        label: '高度',
                        tooltip: '设置当前选中元素的高度',
                        propsBind: {
                            addonAfter: 'px'
                        }
                    })
                }
            }
        ]
    },
    {
        tab: '事件',
        tabKey: 'event',
        component: h(EventPanel)
    }
]
