const fs = require('node:fs')
const path = require('node:path')

const packages = fs.readdirSync(path.resolve(__dirname, 'packages'))
const example = fs.readdirSync(path.resolve(__dirname, 'example'))

module.exports = {
    extends: ['@denaro-config/config-commitlint'],
    prompt: {
        scopes: [...packages, ...example]
    },
    rules: {
        'scope-enum': [2, 'always', [...packages, ...example]]
    }
}
