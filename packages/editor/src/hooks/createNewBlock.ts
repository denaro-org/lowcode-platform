import type { EditorBlock, EditorComponent } from '@lowcode/shared'

import { v4 as uuidv4 } from 'uuid'

import { useDotProp } from './useDotProp'

// 拖拽一个组件, 生成默认的配置存储到 DSL
export const createNewBlock = (component: EditorComponent): EditorBlock => {
    return {
        UUID: uuidv4(),
        moduleName: component.moduleName,
        componentKey: component.key,
        label: component.label,
        focus: false,
        styles: {
            display: 'flex',
            justifyContent: 'flex-start',
            paddingTop: '0',
            paddingRight: '0',
            paddingLeft: '0',
            paddingBottom: '0'
        },
        draggable: component.draggable ?? true,
        props: Object.entries(component.props ?? {}).reduce(
            (prev: Record<string, unknown>, [propName, propSchema]) => {
                const { propObj, prop } = useDotProp(prev, propName)
                if (propSchema?.defaultValue) {
                    propObj[prop] = prev[propName] = propSchema?.defaultValue
                }
                return prev
            },
            {}
        )
    }
}
