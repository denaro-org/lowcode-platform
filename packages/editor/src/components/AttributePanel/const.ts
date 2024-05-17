import type { FlexStyleConfig, TabListItem } from '@/types'

import { createEditorNumberProp } from '@lowcode/shared'
import { h } from 'vue'

import AttrPanel from './components/AttrPanel.vue'
import EventPanel from './components/EventPanel.vue'
import StylePanel from './components/StylePanel.vue'

import FlexDirectionColumn from '@/assets/svgs/flexDirectionColumn.svg?raw'
import FlexDirectionColumnReverse from '@/assets/svgs/flexDirectionColumnReverse.svg?raw'
import FlexDirectionRow from '@/assets/svgs/flexDirectionRow.svg?raw'
import FlexDirectionRowReverse from '@/assets/svgs/flexDirectionRowReverse.svg?raw'

// 右侧 tab 切换面板的配置
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
                title: '基础样式',
                key: 'base-style',
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
            },
            {
                title: 'Flex 弹性布局',
                key: 'flex-style'
            }
        ]
    },
    {
        tab: '事件',
        tabKey: 'event',
        component: h(EventPanel)
    }
]

// 右侧 Flex 弹性布局的配置
export const flexStyleConfig: FlexStyleConfig[] = [
    {
        label: 'flex-direction',
        defaultValue: 'row',
        options: [
            {
                value: 'row',
                icon: FlexDirectionRow
            },
            {
                value: 'column',
                icon: FlexDirectionColumn
            },
            {
                value: 'row-reverse',
                icon: FlexDirectionRowReverse
            },
            {
                value: 'column-reverse',
                icon: FlexDirectionColumnReverse
            }
        ]
    },
    {
        label: 'flex-wrap',
        defaultValue: 'nowrap',
        options: [
            {
                value: 'nowrap'
            },
            {
                value: 'wrap'
            }
        ]
    },
    {
        label: 'align-content',
        defaultValue: 'normal',
        options: [
            {
                value: 'flex-start'
            },
            {
                value: 'flex-end'
            },
            {
                value: 'center'
            },
            {
                value: 'space-between'
            },
            {
                value: 'space-around'
            },
            {
                value: 'stretch'
            }
        ]
    },
    {
        label: 'justify-content',
        defaultValue: 'normal',
        options: [
            {
                value: 'flex-start'
            },
            {
                value: 'flex-end'
            },
            {
                value: 'center'
            },
            {
                value: 'space-between'
            },
            {
                value: 'space-around'
            },
            {
                value: 'space-evenly'
            }
        ]
    },
    {
        label: 'align-items',
        defaultValue: 'normal',
        options: [
            {
                value: 'flex-start'
            },
            {
                value: 'flex-end'
            },
            {
                value: 'center'
            },
            {
                value: 'baseline'
            },
            {
                value: 'stretch'
            }
        ]
    }
]
