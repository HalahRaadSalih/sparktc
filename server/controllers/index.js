var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary');
var partners = require('../models/partners');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// index
router.get('/', function(req, res) {
});

router.post('/email', function(req, res){

  console.log(req.body);
  partners.addPartner(req.body).then(function(partner){
    console.log('partner added');
  });

});

module.exports = router;
