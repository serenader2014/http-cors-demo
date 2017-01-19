var express = require('express')
var app = express()
var config = require('./config')

function setAllowOrigin(res, domain){
  res.set('Access-Control-Allow-Origin', domain || '*')
}

function setAllowHeaders(res, headers){
  res.set('Access-Control-Allow-Headers', headers || 'X-Custom-Header')
}

function setAllowMethods(res, methods){
  res.set('Access-Control-Allow-Methods', methods || 'GET,POST,PUT,DELETE')
}

function setAllowCredentials(res){
  res.set('Access-Control-Allow-Credentials', 'true')
}

module.exports = function() {
  app.get('/no-cors', function(req, res, next) {
    res.send('ok');
  })
  app.route('/api1')
    .get(function(req, res, next) {
      setAllowOrigin(res, 'http://baidu.com')
      res.send('ok')
    })
  app.route('/api2')
    .get(function(req, res, next) {
      setAllowOrigin(res)
      res.send('ok')
    })
    .post(function(req, res, next) {
      setAllowOrigin(res)
      res.send('ok')
    })
  app.route('/api3')
    .options(function(req, res, next) {
      setAllowOrigin(res)
      setAllowHeaders(res)
      res.send('ok')
    })
    .get(function(req, res, next) {
      setAllowOrigin(res)
      res.send('ok')
    })
    .post(function(req, res, next) {
      setAllowOrigin(res)
      res.send('ok')
    })
  app.route('/api4')
    .options(function(req, res, next) {
      setAllowOrigin(res)
      setAllowMethods(res)
      res.send('ok')
    })
    .get(function(req, res, next) {
      setAllowOrigin(res)
      res.send('ok')
    })
    .put(function(req, res, next) {
      setAllowOrigin(res)
      res.send('ok')
    })
  app.route('/api5')
    .get(function(req, res, next) {
      setAllowOrigin(res)
      setAllowCredentials(res)
      res.send('ok')
    })
  app.route('/api6')
    .get(function(req, res, next) {
      setAllowOrigin(res, req.protocol + '://' + req.hostname + ':' + config.clientPort)
      res.send('ok')
    })
  app.route('/api7')
    .get(function(req, res, next) {
      setAllowOrigin(res, req.protocol + '://' + req.hostname + ':' + config.clientPort)
      setAllowCredentials(res)      
      res.send('ok')
    })
  app.listen(config.serverPort, function(err) {
    if (err) throw err
    console.log('server running on ' + config.serverPort)
  })
}
