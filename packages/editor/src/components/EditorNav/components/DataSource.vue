<template>
    <section :class="[styles.dataSource]">
        <div :class="[styles.warpperSearch, 'flex flex-between gap-22']">
            <InputSearch
                v-model.value="state.searchValue"
                disabled
                enter-button
                placeholder="请输入关键词" />

            <Button type="primary" @click="state.isOpen = true">新增</Button>
        </div>
    </section>

    <DataSourceModel v-model:open="state.isOpen" />
</template>

<script setup lang="ts">
import { InputSearch, Button } from 'ant-design-vue'
import { reactive } from 'vue'

import DataSourceModel from './DataSourceModel.vue'
import styles from './index.module.scss'

defineOptions({
    name: 'DataSource'
})

const state = reactive({
    searchValue: '',
    isOpen: false
})
</script>
