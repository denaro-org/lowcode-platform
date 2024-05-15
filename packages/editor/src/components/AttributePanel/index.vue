<template>
    <div :class="[styles.attributePanel, state.isOpen && styles.isOpen]">
        <div
            :class="[styles.floatingActionBtn, 'flex flex-center']"
            @click="state.isOpen = !state.isOpen">
            <DoubleLeftOutlined v-if="state.isOpen" />
            <DoubleRightOutlined v-else />
        </div>

        <Tabs v-model:activeKey="state.activeName">
            <TabPane v-for="item in tabList" :key="item.tabKey" :tab="item.tab">
                <component :is="item.component" :class="[styles.panelItem]" />
            </TabPane>
        </Tabs>
    </div>
</template>

<script setup lang="ts">
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons-vue'
import { Tabs, TabPane } from 'ant-design-vue'
import { reactive } from 'vue'

import { tabList } from './const'
import styles from './index.module.scss'

defineOptions({
    name: 'AttributePanel'
})

const state = reactive({
    activeName: 'attr',
    isOpen: true
})
</script>
