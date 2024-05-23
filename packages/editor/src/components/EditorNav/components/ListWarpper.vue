<template>
    <section :class="[styles.listWarpper, 'flex-colum']">
        <div :class="[styles.warpperSearch]">
            <InputSearch
                v-model.value="searchValue"
                disabled
                enter-button
                placeholder="请输入关键词" />
        </div>

        <div
            :class="[
                styles.listBody,
                'w-100 overflow-y-auto',
                listSchema.length === 0 && 'flex flex-center'
            ]">
            <template v-if="listSchema.length">
                <DraggableTransitionGroup
                    v-model="listSchema"
                    class="grid-column2 gap-8"
                    v-bind="draggableBind">
                    <template #item="{ element }">
                        <div
                            :class="[styles.listItem, 'w-100']"
                            :data-label="element.label"
                            :title="element.label">
                            <div
                                :class="[
                                    styles.itemPreview,
                                    'flex',
                                    'flex-center'
                                ]">
                                <component :is="element.preview" />
                            </div>
                        </div>
                    </template>
                </DraggableTransitionGroup>
            </template>

            <template v-else>
                <Empty description="组件列表为空" />
            </template>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { ComponentModules, EditorComponent } from '@lowcode/shared'

import { InputSearch, Empty } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'
import { PropType, computed, inject, ref } from 'vue'

import styles from './index.module.scss'

import { DraggableTransitionGroup } from '@/components'
import { createNewBlock } from '@/hooks'
import { UISchemaSymbol } from '@/symbol'

defineOptions({
    name: 'ListWarpper'
})
const props = defineProps({
    // 导航栏分类
    category: {
        type: String as PropType<keyof ComponentModules>,
        default: undefined
    }
})

const uiSchema = inject<EditorComponent[]>(UISchemaSymbol) ?? []
const listSchema = computed(() => {
    return uiSchema.filter(item => item.moduleName === props.category)
})
const searchValue = ref('')

// 克隆组件节点信息
const cloneDog = (comp: EditorComponent) => {
    const cloneCom = cloneDeep(comp)
    return createNewBlock(cloneCom)
}

const draggableBind = computed(() => ({
    group: { name: 'components', pull: 'clone', put: false },
    clone: cloneDog
}))
</script>
