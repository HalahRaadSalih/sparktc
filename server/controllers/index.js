var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary');
var partners = require('../models/partners');
var ibmdb = require('ibm_db');
var request = require('request');

router.post('/email', function(req, res){
  var db2;
  var connString;
  var credentials;

  // get partner from req body
  var partner = req.body;
  // check for env variables
  if (process.env.VCAP_SERVICES) {
      // get environment variables from IBM bluemix
      var env = JSON.parse(process.env.VCAP_SERVICES);
      credentials = env['sendgrid'][0].credentials;

  }
  else {
    connString = process.env.DATABASE_URL;
    credentials = {
         "hostname": "smtp.sendgrid.net",
         "username" : process.env.username,
         "password" : process.env.password
     }
  }

  // get sendgrid
  var sendgrid  = require('sendgrid')(credentials.username, credentials.password);
  // create new email instance
  var email = new sendgrid.Email();
  // send email
  sendgrid.send({
    to:       partner.email,
    bcc:      process.env.from_email,
    from:     process.env.community_email,
    subject:  'Welcome To Spark.TC Community',
    text:     'Thank you for joining the Spark.TC Community.\n You are making the first step to change how people work with data through open analytics. \n Our team is getting to know each community member.\n Please be patient as we make new friendships. \n \n \n {spark.tc}'
    }, function(err, json) {
      if (err) {
        res.status(500).send("Sendgrid Error");
      }
      else {
        res.status(200).send('');
      }
 });


});

module.exports = router;
