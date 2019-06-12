'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API: '"http://localhost:3000/"',
  SOCKET_SERVER: '"http://localhost:4444"',
  ASSETS: '"https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/pytchblack"'
})
