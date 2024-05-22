import type { BtnItem } from '@/types'

import {
    CloudDownloadOutlined,
    CodeOutlined,
    DeleteOutlined,
    ExclamationCircleOutlined,
    FileImageOutlined,
    SettingOutlined
} from '@ant-design/icons-vue'
import { saveDomAsImg } from '@lowcode/shared'
import { Modal } from 'ant-design-vue'
import { createVNode, h, nextTick } from 'vue'

import { MOBILE_SIZE } from '@/config'

export const centerBtnList: BtnItem[] = [
    {
        icon: h(CodeOutlined),
        label: '生成代码',
        componentBindName: 'seeCode',
        bindProps: {
            editorType: 'GenVueCode'
        }
    },
    {
        icon: h(CloudDownloadOutlined),
        label: '查看 DSL JSON',
        componentBindName: 'seeCode',
        bindProps: {
            editorType: 'AppDSL'
        }
    },
    {
        icon: h(FileImageOutlined),
        label: '画布截图',
        on: {
            onClick: async ({ simulatorEditorCls }): Promise<void> => {
                await nextTick(async () => {
                    const simulatorEditorEl = document.getElementById(
                        simulatorEditorCls as string
                    )

                    simulatorEditorEl &&
                        (await saveDomAsImg(simulatorEditorEl, {
                            width: MOBILE_SIZE.width,
                            height: MOBILE_SIZE.height
                        }))
                })
            }
        }
    },
    {
        icon: h(DeleteOutlined),
        label: '清空画布',
        on: {
            onClick: ({ resetAppDSL }): void => {
                Modal.confirm({
                    title: '警告',
                    icon: createVNode(ExclamationCircleOutlined),
                    content: '清空画布后将无法恢复, 确认清空吗？',
                    okText: '确认',
                    cancelText: '取消',
                    onOk: () => {
                        resetAppDSL()
                    }
                })
            }
        }
    },
    {
        icon: h(SettingOutlined),
        label: '画布配置',
        componentBindName: 'canvasSettings'
    }
]
