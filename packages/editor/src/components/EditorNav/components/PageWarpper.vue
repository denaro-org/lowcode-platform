<template>
    <section :class="[styles.pageWarpper]">
        <Button type="primary" @click="addPage">
            <PlusOutlined />
            添加页面
        </Button>

        <div :class="[styles.treeWarpper]">
            <DirectoryTree :tree-data="pages" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue'
import { Button, DirectoryTree } from 'ant-design-vue'
import { computed } from 'vue'

import styles from './index.module.scss'

import { useAppDSL } from '@/hooks/index.js'

defineOptions({
    name: 'PageWarpper'
})

const { appDSL } = useAppDSL()

// 所有的页面
const pages = computed(() =>
    Object.keys(appDSL.pages).map(key => ({
        title: appDSL.pages[key].title,
        key: key
    }))
)

const addPage = () => {}
</script>
