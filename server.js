var express = require('express');
var morgan = require('morgan');
var path = require('path');
var getBootstrapNode = require('bootstrap-node');
var bootstrapNode = getBootstrapNode();

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'index.html'));
});

app.get('/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, '', req.params.fileName));
});

app.get('/css/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', req.params.fileName));
});

app.get('/images/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', req.params.fileName));
});

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});
