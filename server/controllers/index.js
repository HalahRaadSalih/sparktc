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

  if (process.env.VCAP_SERVICES) {
      var env = JSON.parse(process.env.VCAP_SERVICES);
      db2 = env['sqldb'][1].credentials;
  }
  else {

  }

  var connString = "DRIVER={DB2};DATABASE=" + db2.db + ";UID=" + db2.username + ";PWD=" + db2.password + ";HOSTNAME=" + db2.hostname + ";port=" + db2.port;
  ibmdb.open(connString, function(error, conn){
    if (error){
			 res.send("error occurred " + err.message);
			}
      else{
          conn.query('INSERT INTO MYTABLE (ADDRESS,COMPANYDESCRIPTION,COMAPANYLOGO,COMPANYNAME,COMPANYNUMBER,COMPANYPOINTS,COMPANYSTATUS,COMPANYSTATUS,COMPANYURL,EMAIL,NAME) VALUES(\'2016 BLAKE ST\',\'YOYO\',\'YO\',\'H\',\'123'+',1,'+'\'HELL\',\'YO\',\'HALAH@GMAIL.COM\',\'HALA\')\;', function(err, tables, moreResultSets){

            });
      }
  });
});

module.exports = router;
