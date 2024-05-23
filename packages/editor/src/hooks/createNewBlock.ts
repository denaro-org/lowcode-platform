import type {
    BlockProps,
    EditorBlock,
    EditorComponent,
    PropValue
} from '@lowcode/shared'

import { EditorPropsType } from '@lowcode/shared'
import { v4 as uuidv4 } from 'uuid'

import { useDotProp } from './useDotProp'

/**
 * @description 拖拽一个组件, 生成默认的配置存储到 DSL
 * @param {EditorComponent} component 传入组件配置
 * @returns {EditorBlock}
 */
export const createNewBlock = (component: EditorComponent): EditorBlock => {
    return {
        type: 'block',
        UUID: 'uuid_' + uuidv4().substring(0, 16),
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
            paddingBottom: '0',
            marginTop: '0',
            marginRight: '0',
            marginLeft: '0',
            marginBottom: '0',
            textAlign: 'left'
        },
        draggable: component.draggable ?? true,
        props: Object.entries(component.props ?? {}).reduce(
            (prev: BlockProps, [propName, propSchema]) => {
                const { propObj, prop } = useDotProp(prev, propName)
                if (propSchema?.defaultValue) {
                    propObj[prop] = prev[propName] =
                        propSchema?.defaultValue as unknown as PropValue
                }
                if (
                    propSchema.type === EditorPropsType.arrGroup &&
                    propSchema.props &&
                    Object.keys(propSchema.props).length > 0
                ) {
                    const defaultValues = Object.entries(
                        propSchema.props
                    ).reduce((_prev: BlockProps, [_propName, _propSchema]) => {
                        const { propObj: _propObj, prop: _prop } = useDotProp(
                            _prev,
                            _propName
                        )

                        if (_propSchema?.defaultValue) {
                            _propObj[_prop] = _prev[_propName] =
                                _propSchema?.defaultValue as unknown as PropValue
                        }
                        return _prev
                    }, {})

                    if (Array.isArray(propObj[prop])) {
                        propObj[prop] = (propObj[prop] as object[])?.map(
                            item => {
                                return {
                                    ...defaultValues,
                                    ...item
                                }
                            }
                        )
                    }
                }

                return prev
            },
            {}
        )
    }
}
