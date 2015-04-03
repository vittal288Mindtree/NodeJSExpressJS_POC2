var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Role = require('../model/roles');

/* GET home page. */
router.get('/', function (req, res, next) {
   /* tempObj = Role.find({
        name: 'preLoginPage'
    });*/
   /* tempObj = {
        name: "VIttal"
    };*/
    //mongoose.model('Role').find({ name: 'preLoginPage' })
    //var temp = mongoose.model('Blob').find({});
    res.render('index', mongoose.model('Blob').find({}));
});

module.exports = router;
