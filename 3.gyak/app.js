var express = require('express');
var app = express();
var nunjucks = require('nunjucks');

nunjucks.configure('views', {
    express: app,
    autescape: true
});

app.use(function (req, res, next) {
    console.log(req.method + ' ' + req.url);
    next();
});

app.get('/hello/:name', function (req, res) {
    const name = req.params.name;
    const foo = req.query.foo;
    res.render('master.njk', {name})
})

app.use(express.static('public'));

app.get('/hello', function (req, res) {
    res.end("hello");
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Elindult a szerver");
});