/** @type {import('prettier').Config} */
// @ts-check

module.exports = {
    $schema: 'https://json.schemastore.org/prettierrc',

    ...require('@denaro-config/prettier'),
    tabWidth: 4 // 缩进长度
}
