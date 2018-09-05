var express = require('express')
var router = express.Router()
var Stack = require('../models/contentstack')


router.get('/about', function (req, res) {  
    var contentTypeUID = "about" 
    
    Stack.ContentType(contentTypeUID).Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            res.render('about.html', {   
                entry: result[0],
            })
        }, function error(error) {
            next(error)
    })
})

module.exports = router