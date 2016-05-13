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
      var env = JSON.parse(process.env.VCAP_SERVICES);
      db2 = env['user-provided'][0].credentials;
      connString = "DRIVER={DB2};DATABASE=" + db2.db + ";UID=" + db2.username + ";PWD=" + db2.password + ";HOSTNAME=" + db2.hostname + ";port=" + db2.port + "PROTOCOL=TCPIP";
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

  // open connection with ibmdb
  // ibmdb.open(connString, function(error, conn){
  //   if (error){
  //     res.status(500).send("Can not connect to the IMB database locally");
	// 		}
  //     else{
  //         //make SQL query
  //         conn.query('INSERT INTO MYTABLE (ADDRESS,COMPANYDESCRIPTION,COMPANYLOGO,COMPANYNAME,COMPANYNUMBER,COMPANYPOINTS,COMPANYSTATUS,COMPANYURL,EMAIL,NAME) VALUES(\''+partner.address+'\',\''+partner.companyDescription+'\',\''+partner.companyLogo+'\',\''+partner.companyName+'\',\''+partner.phoneNumber+'\','+1+',\'None\',\''+partner.comapanyURL+'\',\''+partner.email+'\',\''+partner.name+'\')\;', function(err, tables, moreResultSets){
  //           if(err){
  //             res.status(500).send("Error Database Insertion Failure");
  //           }
  //           else{
  //
  //           }
  //           //close connection with ibmdb
  //           conn.close(function(){
	// 				      });
  //           });
  //     }
  // });
});

module.exports = router;
