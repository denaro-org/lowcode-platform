// 默认的侧边栏配置
import type {  NavConfig } from '@/types'

import {
    DatabaseOutlined,
    DropboxOutlined,
    FileTextOutlined,
    ProjectOutlined
} from '@ant-design/icons-vue'
import { h } from 'vue'

import { DataSource, ListWarpper, PageWarpper } from './components/index'

/**
 * @description 侧边栏配置
 */
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
        moduleName: 'baseWidgets',
        icon: h(DropboxOutlined),
        component: h(ListWarpper)
    },
    {
        label: '容器组件',
        name: 'container-components',
        moduleName: 'containerComponents',
        icon: h(ProjectOutlined),
        component: h(ListWarpper)
    },
    {
        label: '数据源',
        name: 'data-source',
        icon: h(DatabaseOutlined),
        component: h(DataSource)
    }
]
