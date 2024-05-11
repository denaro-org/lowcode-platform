<template>
    <div>
        <template v-for="item in currentPageBlocks" :key="item.UUID">
            <component :is="item.componentKey" />
        </template>
    </div>
</template>

<script setup lang="ts">
const props = window.$wujie?.props

const { appDSL, path } = props || {}

const currentPage = appDSL?.pages[path as string]

const currentPageBlocks = currentPage?.blocks ?? []
</script>
