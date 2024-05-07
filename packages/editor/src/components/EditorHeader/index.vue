<template>
    <header :class="[styles.editorHeader, 'box-shadow-base']"></header>
</template>

<script lang="ts" setup>
import styles from './index.module.scss'

defineOptions({
    name: 'EditorHeader'
})
</script>
