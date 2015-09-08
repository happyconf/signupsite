var express = require('express'),
    serveStatic = require('serve-static'),
    cacheControl = require('./lib/cache-control');

var app = express();

app.use(serveStatic('public', {
  setHeaders: cacheControl.setHeader
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', function (req,res) {
  res.render('index');
});

app.listen(process.env.PORT || 3000)