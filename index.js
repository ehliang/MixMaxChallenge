var express = require('express');
var sys = require('sys')
var exec = require('child_process').exec;
var app = express();
app.use(express.static('public'))
app.get('/', function (req, res) {
  res.sendFile(__dirname +'/index.html')
});

app.get('/speak', function(req, res){
text = "Take a shot winner!"



exec("say " + text)
});

app.get('/list', function(req, res){
	console.log(req);
	console.log(res);
	text = "yeeeee"

	exec("say " + text)
});

app.listen(3000, function() {console.log('listening')}); 
