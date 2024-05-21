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

        const element = props.element

        const thatRender = uiSchema.find(
            item => item.key === element.componentKey
        )

        const elementProps = element.props ?? {}
        const elementStyles = element.styles ?? {}

        return thatRender?.render({
            styles: elementStyles,
            props: elementProps,
            model: {},
            block: element,
            custom: {}
        })
    }
})
