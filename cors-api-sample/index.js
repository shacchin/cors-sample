var express = require('express');
var app = express();

// CORS対応してないパターン
app.get('/api/v1/helloworld', (req, res) => {
  res.json({
    message: 'Hello world!!!!'
  });
});

// CORS対応してるパターン
app.get('/api/v1/corshelloworld', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', req.header('Origin'));
  res.json({
    message: 'Hello world!!!!'
  });
});

// 3000番ポートで待ち受け
var server = app.listen(3000, function() {
  console.log('Node.js is listening to PORT:' + server.address().port);
});
