import type { EditorBlock, EditorComponent } from '@lowcode/shared'
import type { PropType } from 'vue'

import { defineComponent, inject } from 'vue'

import { UISchemaSymbol } from '@/symbol'

export default defineComponent({
    name: 'CompRender',
    props: {
        element: {
            type: Object as PropType<EditorBlock>,
            required: true,
            default: () => ({})
        }
    },
    setup(props) {
        const uiSchema =
            inject<EditorComponent[]>(UISchemaSymbol as symbol) ?? []

        const thatRender = uiSchema.find(
            item => item.key === props.element.componentKey
        )

        return thatRender?.render({
            styles: props.element.styles ?? {},
            props: props.element.props ?? {},
            model: {},
            block: props.element,
            custom: {}
        })
    }
})
