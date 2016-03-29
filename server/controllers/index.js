var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var mailchimp = require('mailchimp').MailChimpAPI;
var apiKey = process.env.MAILCHIMP_API_KEY;
var sendgrid = require("sendgrid")(process.env.sendgrid_api_key);


// index
router.get('/', function(req, res) {
});

router.post('/email', function(req, res){

// create reusable transporter object using the default SMTP transport
    console.log(req.body);

    var email = new sendgrid.Email();

    email.addTo("halah.salih@hotmail.com");
    email.setFrom("halah.alshaikhly@gmail.com");
    email.setSubject("Sending with SendGrid is Fun");
    email.setHtml("and easy to do anywhere, even with Node.js");

    sendgrid.send(email);

});

module.exports = router;
