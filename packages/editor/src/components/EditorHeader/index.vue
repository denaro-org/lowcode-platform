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
                    @click="btnClickOn(item)">
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
                        @click="openModel({ name: 'previewDialog' })">
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
import type { UseOpenModel, BtnItem, BindConfig } from '@/types'

import { PlayCircleOutlined } from '@ant-design/icons-vue'
import { Button, Tooltip } from 'ant-design-vue'
import { provide } from 'vue'

import { centerBtnList } from './const'
import styles from './index.module.scss'

import { initOpenModel, useAppDSL } from '@/hooks'
import { InitOpenModelSymbol } from '@/symbol'

defineOptions({
    name: 'EditorHeader'
})

const { componentBind, openComponent } = initOpenModel()
const { resetAppDSL } = useAppDSL()

/**
 * @description 打开组件
 */
const openModel = (config: BindConfig) => {
    openComponent({
        name: config.name,
        open: true
    })
}

/**
 * @description 中间 click 操作处理
 */
const btnClickOn = (btnConfig: BtnItem) => {
    const { on, componentBindName } = btnConfig

    if (componentBindName) {
        openComponent({
            name: componentBindName,
            open: true
        })
    }

    if (on) {
        const { onClick } = on
        if (onClick && onClick instanceof Function) {
            onClick({
                resetAppDSL,
                simulatorEditorCls: 'SimulatorEditorRef'
            })
        }
    }
}

provide<UseOpenModel>(InitOpenModelSymbol, initOpenModel())
</script>
