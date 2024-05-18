import type { EditorComponent } from '@lowcode/shared'
import type { VNode } from 'vue'

import {
    createEditorInputProp,
    createEditorNumberProp,
    createEditorSelectProp,
    createEditorSwitchProp
} from '@lowcode/shared'

import {
    DEFAULT_FIT,
    DEFAULT_REFERRERPOLICY,
    FIT_LIST,
    REFERRERPOLICY_LIST
} from '@/__const'
import { useRegisterRef } from '@/__utils'

const imageConfig: EditorComponent = {
    key: 'tm-var-image',
    label: '图片',
    moduleName: 'baseWidgets',
    preview: () => (
        <tm-var-image
            config={{
                lazy: true,
                src: 'https://varlet.pages.dev/cat.jpg'
            }}
        />
    ),
    render: ({ props, block, styles }) => {
        return () => (
            <div style={styles}>
                <tm-var-image
                    ref={(el: VNode) => useRegisterRef(el, block.UUID ?? '')}
                    config={props}
                />
            </div>
        )
    },
    props: {
        // 图片地址
        src: createEditorInputProp({
            label: '图片地址',
            defaultValue: 'https://varlet.pages.dev/cat.jpg',
            ruleNames: ['URL']
        }),
        fit: createEditorSelectProp({
            label: '图片适应方式',
            defaultValue: DEFAULT_FIT,
            constDict: FIT_LIST
        }),
        // 可替换元素的内容在其内容框中的位置，等同于 object-position
        position: createEditorInputProp({
            label: '可替换元素的内容在其内容框中的位置',
            defaultValue: undefined
        }),
        // 替代文本
        at: createEditorInputProp({
            label: '替代文本',
            defaultValue: undefined
        }),
        // 图片描述性文字
        title: createEditorInputProp({
            label: '图片描述性文字',
            defaultValue: undefined
        }),
        // 指示在获取资源时使用的来源地址
        referrerpolicy: createEditorSelectProp({
            label: '获取资源时使用的来源地址',
            defaultValue: DEFAULT_REFERRERPOLICY,
            constDict: REFERRERPOLICY_LIST
        }),
        // 图片宽度
        width: createEditorNumberProp({
            label: '图片宽度',
            useAddonAfter: true,
            addonAfters: ['px', '%']
        }),
        // 图片高度
        height: createEditorNumberProp({
            label: '图片高度',
            useAddonAfter: true,
            addonAfters: ['px', '%']
        }),
        // 图片圆角
        radius: createEditorNumberProp({
            label: '图片圆角',
            useAddonAfter: true,
            addonAfters: ['px', '%']
        }),
        // 是否开启懒加载
        lazy: createEditorSwitchProp({
            label: '懒加载',
            defaultValue: true
        }),
        // 当开启懒加载时, 加载中显示的图片
        loading: createEditorInputProp({
            label: '加载中显示的图片',
            ruleNames: ['URL'],
            display: ({ model }) => !!model.lazy
        }),
        // 当开启懒加载时, 加载失败显示的图片
        error: createEditorInputProp({
            label: '加载失败显示的图片',
            ruleNames: ['URL'],
            display: ({ model }) => !!model.lazy
        }),
        // 是否使用水波纹
        ripple: createEditorSwitchProp({
            label: '是否使用水波纹',
            defaultValue: true
        }),
        // 是否是块级元素
        block: createEditorSwitchProp({
            label: '是否是块级元素',
            defaultValue: false
        })
    }
}

export default imageConfig
