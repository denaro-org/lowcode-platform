<template>
    <div :class="[styles.attributePanel, state.isOpen && styles.isOpen]">
        <div
            :class="[styles.floatingActionBtn, 'flex flex-center']"
            @click="state.isOpen = !state.isOpen">
            <DoubleLeftOutlined v-if="state.isOpen" />
            <DoubleRightOutlined v-else />
        </div>

        <div class="h-100">
            <Tabs v-model:activeKey="state.activeName" class="h-100">
                <TabPane
                    v-for="item in tabList"
                    :key="item.tabKey"
                    :tab="item.tab">
                    <section
                        :class="[
                            styles.panelBody,
                            'overflow-y-auto',
                            isEmpty && 'flex flex-center'
                        ]">
                        <template v-if="!isEmpty">
                            <component
                                :is="item.component"
                                :children-config="item.childrenConfig" />
                        </template>

                        <template v-else>
                            <Empty description="请在画布区域选中任意一个组件" />
                        </template>
                    </section>
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons-vue'
import { Tabs, TabPane, Empty } from 'ant-design-vue'
import { computed, reactive } from 'vue'

import { tabList } from './const'
import styles from './index.module.scss'

import { useAppDSL } from '@/hooks'

defineOptions({
    name: 'AttributePanel'
})

const state = reactive({
    activeName: 'attr',
    isOpen: true
})
const { currentBlock } = useAppDSL()
const isEmpty = computed(() => Object.keys(currentBlock.value).length === 0)
</script>
