var express = require('express');
var app = express();
//var ejs = require('ejs');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.engine('html', require('ejs').__express);

app.get('/html', function(req, res, next) {
    res.render('index.html');
});

app.get('/', function(req, res, next){
    res.render('index');
});
app.listen(3030);
console.log('Express started on port 3030');