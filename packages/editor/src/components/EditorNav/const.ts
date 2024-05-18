// 默认的侧边栏配置
import type { NavConfig } from '@/types'

import {
    DatabaseOutlined,
    DropboxOutlined,
    FileTextOutlined
} from '@ant-design/icons-vue'
import { h } from 'vue'

import { DataSource, ListWarpper, PageWarpper } from './components/index'

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
    },
    {
        label: '数据源',
        name: 'data-source',
        icon: h(DatabaseOutlined),
        component: h(DataSource)
    }
]
