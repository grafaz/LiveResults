var express = require('express');
var router = express.Router();
var https = require('https');

/* GET users listing. */
router.get('/', function(req, res, next) {
//https://dbtopas.lt/takas/gyvaidownload.php?varz=2006033&diena=1&from=1&rnd=52348
var https = require('https');
var dbtopasRespone;
/**
 * HOW TO Make an HTTP Call - GET
 */
// options for GET
var optionsget = {
    host : 'dbtopas.lt', // here only the domain name
    // (no http/https !)
    port : 443,
    path : '/takas/gyvaidownload.php?varz=2006033&diena=1&from=1&rnd=52348', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};
 
console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');
 
// do the GET request
var reqGet = https.request(optionsget, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);
 
    res.on('data', function(d) {
        dbtopasRespone = d;
        //console.info('GET result:\n');
        //process.stdout.write(d);
        console.info('\nCall completed');
    });
});
 
reqGet.end();

reqGet.on('error', function(e) {
    console.error(e);
});
  //res.send('respond with a resource');
    //process.stdout.write(dbtopasRespone);
    //res.send(dbtopasRespone);
console.log('dbtopasRespone: ' +dbtopasRespone);
  res.send(dbtopasRespone);
  
});


module.exports = router;
