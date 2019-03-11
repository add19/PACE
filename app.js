var express = require("express");
var app = express();

var path = require("path");
app.use(express.static("snipp"));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/scss', express.static(__dirname + '/scss'));


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"))
});


app.get('/index.html', function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"))
});

app.get('/about.html', function(req, res){
	res.sendFile(path.join(__dirname + "/about.html"))
});

app.get('/blog.html', function(req, res){
	res.sendFile(path.join(__dirname + "/blog.html"))
});

app.get('/prudence.html', function(req, res){
	res.sendFile(path.join(__dirname + "/prudence.html"))
});


var server = app.listen(process.env.PORT, ()=>{
    console.log("Stark Server active...");
});