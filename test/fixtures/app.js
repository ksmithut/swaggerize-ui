'use strict';

var Promise   = require('bluebird');
var http      = require('http');
var express   = require('express');
var swaggerUi = require('../../');
var app       = express();
var server    = http.createServer(app);

var docs = require('./docs');

app.get('/api-doc', function (req, res) {
  res.json(docs);
});

app.get('/hello/:name', function (req, res) {
  res.json({message: 'Hello ' + req.params.name + '!'});
});

app.use('/docs', swaggerUi());

module.exports = new Promise(function (resolve, reject) {
  server.listen(8000)
    .on('listening', resolve)
    .on('error', reject);
}).then(function () {
  return app;
});
