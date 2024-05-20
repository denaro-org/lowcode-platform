import type { BtnItem } from '@/types'

import {
    CloudDownloadOutlined,
    CodeOutlined,
    DeleteOutlined,
    FileImageOutlined,
    SettingOutlined
} from '@ant-design/icons-vue'
import { h } from 'vue'

export const centerBtnList: BtnItem[] = [
    {
        icon: h(CodeOutlined),
        label: '生成代码',
        on: {
            onClick: (): void => {
                //
                console.log(111)
            }
        }
    },
    {
        icon: h(CloudDownloadOutlined),
        label: '查看 DSL JSON',
        on: {
            onClick: (): void => {
                //
                console.log(111)
            }
        }
    },
    {
        icon: h(FileImageOutlined),
        label: '画布截图',
        on: {
            onClick: (): void => {
                //
                console.log(111)
            }
        }
    },
    {
        icon: h(DeleteOutlined),
        label: '清空画布',
        on: {
            onClick: (): void => {
                //
                console.log(111)
            }
        }
    },
    {
        icon: h(SettingOutlined),
        label: '画布配置',
        componentBindName: 'canvasSettings'
    }
]
