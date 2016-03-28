var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// index
router.get('/', function(req, res) {
});

router.post('/email', function(req, res){

// create reusable transporter object using the default SMTP transport
console.log('here');

  console.log(req.body);
    var name = req.body.name;
    var from = process.env.email;
    var message = 'Hey, this is just a test email from the app to to a registered partner';
    var to = req.body.email;
    var smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: process.env.email,
            pass: process.env.password
        }
    });

    var mailOptions = {
        from: from,
        to: to,
        subject: name+' | new message !',
        text: message
    }

    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
});

module.exports = router;
