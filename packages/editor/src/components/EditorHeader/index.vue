<template>
    <header :class="[styles.editorHeader, 'box-shadow-base', 'flex-row']">
        <section :class="[styles.headerLeft]"></section>

        <section :class="[styles.headerCenter]">
            <div :class="[styles.centerBtnList, 'flex', 'flex-around']">
                <div
                    v-for="(item, index) in centerBtnList"
                    :key="index"
                    :class="[
                        styles.centerItem,
                        'flex-column',
                        'flex-row-center'
                    ]"
                    v-bind="item.on"
                    @click="
                        open({
                            name: item.componentBindName as ComponentBindName
                        })
                    ">
                    <Tooltip placement="bottom" :title="item.label">
                        <component :is="item.icon" :class="[styles.btnIcon]" />
                        <span class="text-ellipsis">{{ item.label }}</span>
                    </Tooltip>
                </div>
            </div>
        </section>

        <section
            :class="[styles.headerRight, 'flex-row', 'flex-column-center']">
            <Tooltip placement="bottom" title="预览效果">
                <div :class="[styles.playPreview]">
                    <Button
                        type="primary"
                        shape="circle"
                        size="large"
                        @click="open({ name: 'previewDialog' })">
                        <PlayCircleOutlined />
                    </Button>
                </div>
            </Tooltip>
        </section>
    </header>

    <component
        :is="componentBind.name"
        v-bind="componentBind.bindProps"
        v-model:open="componentBind.open" />
</template>

<script setup lang="ts">
import type { BindConfig, UseOpenModel, ComponentBindName } from '@/types'

import { PlayCircleOutlined } from '@ant-design/icons-vue'
import { Button, Tooltip } from 'ant-design-vue'
import { provide } from 'vue'

import { centerBtnList } from './const'
import styles from './index.module.scss'

import { initOpenModel } from '@/hooks'
import { InitOpenModelSymbol } from '@/symbol'

defineOptions({
    name: 'EditorHeader'
})

const { componentBind, openComponent } = initOpenModel()

/**
 * @description 打开组件
 */
const open = (config: BindConfig) => {
    openComponent({
        name: config.name,
        open: true
    })
}

provide<UseOpenModel>(InitOpenModelSymbol, initOpenModel())
</script>
