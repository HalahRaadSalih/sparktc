var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// index
router.get('/', function(req, res) {
});

router.post('/email', function(req, res){

// create reusable transporter object using the default SMTP transport
    console.log(req.body);
    var name = req.body.name;
    var from = process.env.email;
    var message = "Good evening,\n\n We received a significant amount of interest for the open analytics\necosystem pilot. Please send me the following files & information if you\n wish to be included in our launch next week by* close of business\ntomorrow. *\n  - High resolution logo in vector format for re-sizing.\n- One paragraph on your company or startup for publication on the\nportal.  - One meaningful contribution to the group:\n - Meetup participation\n- Free tools, training, or course materials\n - Contributions to open source code\n- Sample applications or reference architectures.\n- Contact information including name, email, phone number, and address.\n - Optional: Blog post on the open source analytics group page.\n\nKind regards,\nJoel S Horwitz";
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
