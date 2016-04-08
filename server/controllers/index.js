var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary');
var partners = require('../models/partners');
var ibmdb = require('ibm_db');
var request = require('request');
// var sendgrid = require('sendgrid')(process.env.SpartTCEmailComformation);
// index
router.get('/', function(req, res) {
});

router.post('/email', function(req, res){
  var db2;
  var connString;
  var credentials;
  var partner = req.body;

  if (process.env.VCAP_SERVICES) {
      var env = JSON.parse(process.env.VCAP_SERVICES);
      db2 = env['sqldb'][1].credentials;
      connString = "DRIVER={DB2};DATABASE=" + db2.db + ";UID=" + db2.username + ";PWD=" + db2.password + ";HOSTNAME=" + db2.hostname + ";port=" + db2.port;
      credentials = env['sendgrid'][0].credentials;

  }
  else {
    connString = process.env.DATABASE_URL;
    credentials = {
         "hostname": "smtp.sendgrid.net",
         "username" : "user1",
         "password" : "secret"
     }
  }

  console.log("credentials : ", credentials);
  var sendgrid  = require('sendgrid')(credentials.username, credentials.password);
  var email = new sendgrid.Email();



  ibmdb.open(connString, function(error, conn){
    if (error){
			 res.send("error occurred " + error.message);
			}
      else{
          conn.query('INSERT INTO MYTABLE (ADDRESS,COMPANYDESCRIPTION,COMPANYLOGO,COMPANYNAME,COMPANYNUMBER,COMPANYPOINTS,COMPANYSTATUS,COMPANYURL,EMAIL,NAME) VALUES(\''+partner.address+'\',\''+partner.companyDescription+'\',\''+partner.companyLogo+'\',\''+partner.companyName+'\',\''+partner.phoneNumber+'\','+1+',\'None\',\''+partner.comapanyURL+'\',\''+partner.email+'\',\''+partner.name+'\')\;', function(err, tables, moreResultSets){
            if(err){
              res.send(err.message);
            }
            else{
              res.send('added item successfully');
              sendgrid.send({
                to:       process.env.to_email,
                from:     process.env.from_email,
                subject:  'Hello World',
                text:     'My first email through SendGrid.'
                }, function(err, json) {
                  if (err) {
                    return console.error(err);
                  }
                  
                  console.log(json);
             });
            }

            conn.close(function(){
					         console.log('success yo!');
					      });
            });
      }
  });
});

module.exports = router;
