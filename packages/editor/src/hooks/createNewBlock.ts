import type { EditorBlock, EditorComponent } from '@lowcode/shared'

import { v4 as uuidv4 } from 'uuid'

// 拖拽一个组件, 生成默认的配置存储到 DSL
export const createNewBlock = (component: EditorComponent): EditorBlock => {
    return {
        UUID: uuidv4(),
        moduleName: component.moduleName,
        componentKey: component.key,
        label: component.label,
        focus: false,
        style: {},
        draggable: component.draggable ?? true
    }
}
