<template>
    <section :class="[styles.listWarpper, 'flex-colum']">
        <div :class="[styles.warpperSearch]">
            <InputSearch
                v-model.value="searchValue"
                disabled
                enter-button
                placeholder="请输入关键词" />
        </div>

        <div class="overflow-y-auto">
            <DraggableTransitionGroup
                v-model="uiSchema"
                :class="['grid-row2 gap-8']"
                v-bind="draggableBind">
                <template #item="{ element }">
                    <div
                        :class="styles.listItem"
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
        </div>
    </section>
</template>

<script setup lang="ts">
import type { NavItem } from '@/types'
import type { EditorComponent } from '@lowcode/shared'

import { InputSearch } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'
import { PropType, computed, inject, ref } from 'vue'

import styles from './index.module.scss'

import { DraggableTransitionGroup } from '@/components'
import { createNewBlock } from '@/hooks'
import { UISchemaSymbol } from '@/symbol'

defineOptions({
    name: 'ListWarpper'
})
defineProps({
    // 导航栏分类
    category: {
        type: String as PropType<NavItem['name']>,
        default: undefined
    }
})

const uiSchema = inject<EditorComponent[]>(UISchemaSymbol)
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
