var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary');
var partners = require('../models/partners');
var ibmdb = require('ibm_db');
var request = require('request');

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
              sendgrid.send({
                to:       partner.email,
                from:     process.env.community_email,
                subject:  'Spark.TC Community',
                text:     'Thank you for joining the Spark.TC Community. \\n You are making the first step to change how people work with data through open analytics.\\n Our team is getting to know each community member.\\n Please be patient as we make new friendships. \\n \\n{spark.tc}'
                }, function(err, json) {
                  if (err) {
                    return console.error(err);
                  }

                  console.log(json);
                  res.send('added item successfully');

             });

            }

            conn.close(function(){
					      });
            });
      }
  });
});

module.exports = router;
