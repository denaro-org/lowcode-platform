import type { FlexStyleConfig, TabListItem } from '@/types'

import { createEditorNumberProp } from '@lowcode/shared'
import { h } from 'vue'

import AttrPanel from './components/AttrPanel.vue'
import EventPanel from './components/EventPanel.vue'
import StylePanel from './components/StylePanel.vue'

import AlignBaseline from '@/assets/svgs/alignBaseline.svg?raw'
import AlignCenter from '@/assets/svgs/alignCenter.svg?raw'
import AlignEnd from '@/assets/svgs/alignEnd.svg?raw'
import AlignItemsCenter from '@/assets/svgs/alignItemsCenter.svg?raw'
import AlignItemsEnd from '@/assets/svgs/alignItemsEnd.svg?raw'
import AlignItemsStart from '@/assets/svgs/alignItemsStart.svg?raw'
import AlignItemsStretch from '@/assets/svgs/alignItemsStretch.svg?raw'
import AlignSpaceAround from '@/assets/svgs/alignSpaceAround.svg?raw'
import AlignSpaceBetween from '@/assets/svgs/alignSpaceBetween.svg?raw'
import AlignStart from '@/assets/svgs/alignStart.svg?raw'
import AlignStretch from '@/assets/svgs/alignStretch.svg?raw'
import FlexDirectionColumn from '@/assets/svgs/flexDirectionColumn.svg?raw'
import FlexDirectionColumnReverse from '@/assets/svgs/flexDirectionColumnReverse.svg?raw'
import FlexDirectionRow from '@/assets/svgs/flexDirectionRow.svg?raw'
import FlexDirectionRowReverse from '@/assets/svgs/flexDirectionRowReverse.svg?raw'
import JustifyCenter from '@/assets/svgs/justifyCenter.svg?raw'
import JustifyEnd from '@/assets/svgs/justifyEnd.svg?raw'
import JustifySpaceBetween from '@/assets/svgs/justifySpaceBetween.svg?raw'
import JustifySpaceEvenly from '@/assets/svgs/justifySpaceEvenly.svg?raw'
import JustifyStart from '@/assets/svgs/justifyStart.svg?raw'

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
                        useAddonAfter: true,
                        addonAfters: ['px', '%']
                    }),
                    // 高度
                    height: createEditorNumberProp({
                        label: '高度',
                        useAddonAfter: true,
                        addonAfters: ['px', '%']
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
                value: 'center',
                icon: AlignCenter
            },
            {
                value: 'flex-start',
                icon: AlignStart
            },
            {
                value: 'flex-end',
                icon: AlignEnd
            },
            {
                value: 'space-between',
                icon: AlignSpaceBetween
            },
            {
                value: 'space-around',
                icon: AlignSpaceAround
            },
            {
                value: 'stretch',
                icon: AlignStretch
            }
        ]
    },
    {
        label: 'justify-content',
        defaultValue: 'normal',
        options: [
            {
                value: 'center',
                icon: JustifyCenter
            },
            {
                value: 'flex-start',
                icon: JustifyStart
            },
            {
                value: 'flex-end',
                icon: JustifyEnd
            },
            {
                value: 'space-between',
                icon: JustifySpaceBetween
            },
            {
                value: 'space-around'
            },
            {
                value: 'space-evenly',
                icon: JustifySpaceEvenly
            }
        ]
    },
    {
        label: 'align-items',
        defaultValue: 'normal',
        options: [
            {
                value: 'center',
                icon: AlignItemsCenter
            },
            {
                value: 'flex-start',
                icon: AlignItemsStart
            },
            {
                value: 'flex-end',
                icon: AlignItemsEnd
            },
            {
                value: 'stretch',
                icon: AlignItemsStretch
            },
            {
                value: 'baseline',
                icon: AlignBaseline
            }
        ]
    }
]
