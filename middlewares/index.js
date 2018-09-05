var express = require('express')
var app = express()

app.use('*', require('./partials'))

module.exports = app