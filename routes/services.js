var express = require('express')
var router = express.Router()
var Stack = require('../models/contentstack')


router.get('/services', function (req, res) {
    var contentTypeUID = "services" 
    
    Stack.ContentType(contentTypeUID).Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            res.render('services.html', {   
                entry: result[0],
            })
        }, function error(error) {
            next(error)
    })
})

module.exports = router