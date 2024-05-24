// 编辑器的 header 部分
export { default as EditorHeader } from './EditorHeader/index.vue'
// 编辑器的左侧导航栏
export { default as EditorNav } from './EditorNav/index.vue'
// 拖拽处理组件
export { default as DraggableTransitionGroup } from './DraggableTransitionGroup/index.vue'
// 中间画布
export { default as SimulatorEditor } from './SimulatorEditor/index.vue'
// 用于组件渲染
export { default as CompRender } from './PreviewRender/CompRender.tsx'
// 用于插槽渲染
export { default as PreviewSlotItem } from './PreviewRender/PreviewSlotItem.vue'
// 属性面板
export { default as AttributePanel } from './AttributePanel/index.vue'
// 画板配置
export { default as CanvasSettings } from './CanvasSettings/index.vue'
// 预览弹窗
export { default as PreviewDialog } from './PreviewDialog/index.vue'
// 查看代码
export { default as SeeCode } from './SeeCode/index.vue'
// 编辑器
export { default as MonacoEditor } from './MonacoEditor/index.vue'
// 数据源编辑
export { default as DataSourceModel } from './DataSourceModel/index.vue'

// 导出表单组件
export * from './AttrFormComp'
