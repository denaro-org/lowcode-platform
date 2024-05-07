// 默认的侧边栏配置
import type { NavConfig } from '@/types/index.js'

import { DropboxOutlined, FileTextOutlined } from '@ant-design/icons-vue'
import { h } from 'vue'

import { ListWarpper, PageWarpper } from './components/index.js'

export const defaultNavConfig: NavConfig = [
    {
        label: '页面',
        name: 'page',
        icon: h(FileTextOutlined),
        component: h(PageWarpper)
    },
    {
        label: '基本组件',
        name: 'basic-components',
        icon: h(DropboxOutlined),
        component: h(ListWarpper)
    }
]
