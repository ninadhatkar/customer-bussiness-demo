var express = require('express')
var router = express.Router()
var Stack = require('../models/contentstack')


router.get('/contact', function (req, res) {
    var contentTypeUID = "contact" 
    
    Stack.ContentType(contentTypeUID).Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            res.render('contact.html', {   
                entry: result[0],
            })
        }, function error(error) {
            next(error)
    })
})

module.exports = router