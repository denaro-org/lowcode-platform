<template>
    <var-image lazy src="https://picsum.photos/200/200">
        <template #error>
            <svg viewBox="0 0 24 24" style="width: 100%; height: 100%">
                <path
                    fill="currentColor"
                    d="M21,5V11.59L18,8.58L14,12.59L10,8.59L6,12.59L3,9.58V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M18,11.42L21,14.43V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V12.42L6,15.41L10,11.41L14,15.41" />
            </svg>
        </template>
    </var-image>
</template>

<script setup lang="ts">
defineOptions({
    name: 'TmVarImage'
})
</script>
