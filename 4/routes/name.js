var express = require('express');
var router = express.Router();
 
router.post('/', function(req, res){
     res.send('Name : ' + req.body.user_name);
     console.log('Name : ' + req.body.user_name);
});
module.exports = router; 