var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary');
var partners = require('../models/partners');
var ibmdb = require('ibm_db');

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

  ibmdb.open(connString, function(error, conn){
    if (error){
			 res.send("error occurred " + error.message);
			}
      else{
          conn.query('INSERT INTO MYTABLE (ADDRESS,COMPANYDESCRIPTION,COMPANYLOGO,COMPANYNAME,COMPANYNUMBER,COMPANYPOINTS,COMPANYSTATUS,COMPANYURL,EMAIL,NAME) VALUES(\''+partner.address+'\',\''+partner.companyDescription+'\',\''+partner.companyLogo+'\',\''+partner.companyName+'\',\''+partner.companyNumber+'\','+partner.companyPoints+',\'None\',\''+partner.companyURL+'\',\''+partner.email+'\',\''+partner.name+'\')\;', function(err, tables, moreResultSets){
            if(err){
              res.send(err.message);
            }
            else{
              res.send('added item successfully');
            }

            conn.close(function(){
					         res.send('success yo!');
					      });
            });
      }
  });
});

module.exports = router;
