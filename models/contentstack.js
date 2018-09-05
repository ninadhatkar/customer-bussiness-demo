var Contentstack = require('contentstack')
var config = require('config')

var Stack = Contentstack.Stack(config.get('apikey'), config.get('accesstoken'), config.get('environment'))



module.exports = Stack
