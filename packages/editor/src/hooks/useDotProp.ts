// 转换 xx.xx 的写法

import type { UseDotProp } from '@/types'

export const useDotProp = (
    originObj: Record<string, unknown>,
    propName: string
): UseDotProp => {
    const props: string[] = propName.split('.')
    const isDotProp = props.length > 1
    const prop = props.pop() ?? ''
    // 根据 props 生成对应的对象
    const propObj = props.reduce((prev, current) => {
        if (!prev[current]) {
            prev[current] = {}
        }
        return prev[current] as Record<string, unknown>
    }, originObj)

    return {
        prop,
        propObj,
        isDotProp
    }
}
