var express = require('express')
var app = express()

module.exports = function() {
  app.get('/no-cors', function(req, res, next) {
    res.send('ok');
  })
  app.route('/api1')
    .get(function(req, res, next) {
      res.set('Access-Control-Allow-Origin', 'http://baidu.com')
      res.send('ok')
    })
  app.route('/api2')
    .get(function(req, res, next) {
      res.set('Access-Control-Allow-Origin', '*')
      res.send('ok')
    })
  app.route('/api3')
    .options(function(req, res, next) {
      res.set('Access-Control-Allow-Origin', '*')
      res.set('Access-Control-Allow-Headers', 'X-Custom-Header')
      res.send('ok')
    })
    .get(function(req, res, next) {
      res.set('Access-Control-Allow-Origin', '*')
      res.send('ok')
    })
  app.route('/api4')
    .options(function(req, res, next) {
      res.set('Access-Control-Allow-Origin', '*')
      res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
      res.send('ok')
    })
    .get(function(req, res, next) {
      res.set('Access-Control-Allow-Origin', '*')
      res.send('ok')
    })
    .put(function(req, res, next) {
      res.set('Access-Control-Allow-Origin', '*')
      res.send('ok')
    })
  app.route('/api5')
    .get(function(req, res, next) {
      res.set('Access-Control-Allow-Credentials', 'true')
      res.set('Access-Control-Allow-Origin', '*')
      res.send('ok')
    })
  app.route('/api6')
    .get(function(req, res, next) {
      res.set('Access-Control-Allow-Origin', 'http://localhost:3334')
      res.send('ok')
    })
  app.route('/api7')
    .get(function(req, res, next) {
      res.set('Access-Control-Allow-Origin', 'http://localhost:3334')
      res.set('Access-Control-Allow-Credentials', 'true')
      res.send('ok')
    })
  app.listen(3333, function(err) {
    if (err) throw err
    console.log('server running on 3333')
  })
}
