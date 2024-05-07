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
                    item.name === activeName && styles.isActive
                ]"
                @click="activeName = item.name">
                <i :class="[styles.navIcon, 'icon-26']">
                    <component :is="item.icon" />
                </i>
                <span>{{ item.label }}</span>
            </div>
        </nav>

        <section :class="[styles.contentWarpper]">
            <section v-show="isExpand" :class="[styles.contentWarpperBody]">
                <component :is="activeComponent" />
            </section>
            <div
                :class="[styles.contentBtn, 'flex', 'flex-center']"
                @click="isExpand = !isExpand">
                <i>
                    <DoubleLeftOutlined v-if="isExpand" />
                    <DoubleRightOutlined v-else />
                </i>
            </div>
        </section>
    </section>
</template>

<script lang="ts" setup>
import type { NavConfig } from '@/types/index.js'

import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons-vue'
import { merge } from 'lodash-es'
import { PropType, computed, ref } from 'vue'

import { defaultNavConfig } from './const.js'
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
    return stateNavConfig.value.find(item => item.name === activeName.value)
        ?.component
})

// 激活的导航
const activeName = ref('basic-components')
// 展开收起
const isExpand = ref(true)
</script>
