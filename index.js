var express = require('express');

var https = require('https');
var app = express();

var fs = require('fs');

app.use(express.static('public'));

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})

