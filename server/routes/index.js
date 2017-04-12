var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var config = require('../../config');

var userService = require('../service/userService');


router.get('/', function(req, res, next){

    res.render('index.html');

});
router.get('/card', function(req, res, next){

    res.render('index.html');

});
router.post('/authenticate/signup', function(req, res, next){


    const user = req.body;
    //console.log(user);
    userService.signupUser(user).then(response => {

        res.status(200).json({
            signup:response.signup
        });

        }
        ,
        error => {

            res.status(404);

        }

    );

});
module.exports = router;

