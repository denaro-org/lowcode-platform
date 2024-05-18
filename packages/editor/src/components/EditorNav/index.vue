<template>
    <section :class="[styles.editorNav, 'flex-row']">
        <nav :class="[styles.navWarpper, 'flex-column', 'box-shadow-light']">
            <div
                v-for="(item, index) in stateNavConfig"
                :key="index"
                :class="[
                    styles.navItem,
                    'flex-column',
                    'flex-center',
                    item.name === state.activeName && styles.isActive
                ]"
                @click="state.activeName = item.name">
                <i :class="[styles.navIcon, 'icon-26']">
                    <component :is="item.icon" />
                </i>
                <span>{{ item.label }}</span>
            </div>
        </nav>

        <section :class="[styles.contentWarpper]">
            <section
                :class="[
                    styles.contentWarpperBody,
                    state.isOpen && styles.isOpen
                ]">
                <div
                    :class="[styles.contentBtn, 'flex', 'flex-center']"
                    @click="state.isOpen = !state.isOpen">
                    <DoubleLeftOutlined v-if="state.isOpen" />
                    <DoubleRightOutlined v-else />
                </div>
                <component :is="activeComponent" />
            </section>
        </section>
    </section>
</template>

<script setup lang="ts">
import type { NavConfig } from '@/types'

import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons-vue'
import { merge } from 'lodash-es'
import { PropType, computed, reactive } from 'vue'

import { defaultNavConfig } from './const'
import styles from './index.module.scss'

defineOptions({
    name: 'EditorNav'
})

const props = defineProps({
    navConfig: {
        type: Array as PropType<NavConfig[]>,
        default: () => []
    }
})

const stateNavConfig = computed(() => {
    return merge(defaultNavConfig, props.navConfig)
})
// 当前激活的导航对应渲染
const activeComponent = computed(() => {
    return stateNavConfig.value.find(item => item.name === state.activeName)
        ?.component
})

const state = reactive({
    activeName: 'data-source',
    isOpen: true
})
</script>
