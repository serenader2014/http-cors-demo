var express = require('express')
var app = express()
var config = require('./config')

module.exports = function(){
  app.set('view engine', 'ejs')
  app.set('views', __dirname)
  app.use(function(req, res, next) {
    res.render('index.ejs', {
      clientPort: config.clientPort,
      serverPort: config.serverPort
    })
  })

  app.listen(config.clientPort, function(err) {
    if (err) throw err
    console.log('client listen on ' + config.clientPort)
  })
}
