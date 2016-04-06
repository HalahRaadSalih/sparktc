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
  var partner = req.body;
  if (process.env.VCAP_SERVICES) {
      var env = JSON.parse(process.env.VCAP_SERVICES);
      db2 = env['sqldb'][1].credentials;
      connString = "DRIVER={DB2};DATABASE=" + db2.db + ";UID=" + db2.username + ";PWD=" + db2.password + ";HOSTNAME=" + db2.hostname + ";port=" + db2.port;

  }
  else {
    connString = process.env.DATABASE_URL;
  }

  request({
    url:'https://api.sendgrid.com/api/mail.send.json',
    qs:{
      api_user: 'malarvizhik',
      api_key:process.env.SpartTCEmailComformation,
      to:[partner.email],
      toname:[partner.name],
      subject:'Open Analytics Community',
      text:'Hello' + partner.name + ',\n\n Thank you for joining our Open Analytics Community',
      from:process.env.email,
      cm_mc_uid:'55028817524414544787892',
      cm_mc_sid_50200000:'1459887990'
    },
    method:'POST'
  }, function(res,body, error){
    if(!error && res.statusCode === 200){
      console.log(body);
    }
    else {
      console.log(error);
    }
  });
  // ibmdb.open(connString, function(error, conn){
  //   if (error){
	// 		 res.send("error occurred " + error.message);
	// 		}
  //     else{
  //         conn.query('INSERT INTO MYTABLE (ADDRESS,COMPANYDESCRIPTION,COMPANYLOGO,COMPANYNAME,COMPANYNUMBER,COMPANYPOINTS,COMPANYSTATUS,COMPANYURL,EMAIL,NAME) VALUES(\''+partner.address+'\',\''+partner.companyDescription+'\',\''+partner.companyLogo+'\',\''+partner.companyName+'\',\''+partner.phoneNumber+'\','+1+',\'None\',\''+partner.comapanyURL+'\',\''+partner.email+'\',\''+partner.name+'\')\;', function(err, tables, moreResultSets){
  //           if(err){
  //             res.send(err.message);
  //           }
  //           else{
  //             res.send('added item successfully');
  //           }
  //
  //           conn.close(function(){
	// 				         console.log('success yo!');
	// 				      });
  //           });
  //     }
  // });
});

module.exports = router;
