var Contentstack = require('contentstack')
var config = require('config')

var Stack = Contentstack.Stack(config.get('apikey'), config.get('accesstoken'), config.util.getEnv('NODE_ENV'))


module.exports = Stack
