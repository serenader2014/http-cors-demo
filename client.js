var express = require('express')
var app = express()

module.exports = function(){
  app.use('/', express.static(__dirname))

  app.listen(3334, function(err) {
    if (err) throw err
    console.log('client listen on 3334')
  })
}
