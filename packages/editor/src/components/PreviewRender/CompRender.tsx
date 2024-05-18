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

        const elementProps = props.element.props ?? {}
        const elementStyles = props.element.styles ?? {}

        return thatRender?.render({
            styles: elementStyles,
            props: elementProps,
            model: {},
            block: props.element,
            custom: {}
        })
    }
})
