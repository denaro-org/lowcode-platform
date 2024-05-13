import type { EditorBlock, EditorComponent } from '@lowcode/shared'
import type { PropType } from 'vue'

import { defineComponent, inject } from 'vue'

export default defineComponent({
    name: 'CompRender',
    props: {
        element: {
            type: Object as PropType<EditorBlock>,
            default: () => ({})
        }
    },
    setup(props) {
        const uiSchema = inject<EditorComponent[]>('uiSchema') ?? []
        console.log(
            '%c [ uiSchema ]-16',
            'font-size:13px; background:pink; color:#bf2c9f;',
            uiSchema
        )
        const thatRender = uiSchema.find(
            item => item.key === props.element.componentKey
        )

        return thatRender?.render({
            styles: {},
            props: {},
            model: {},
            block: props.element,
            custom: {}
        })
        // return visualConfig.componentMap[props.element.componentKey].render({
        //     styles: props.element.styles || {},
        //     props: props.element.props || {},
        //     model: {},
        //     block: props.element,
        //     custom: {}
        // })
    }
})
