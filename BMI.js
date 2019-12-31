const express = require("express");
const bodyParser = require("body-parser");
const init = require('git-init')
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, function(){
	console.log("server is up")
});

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
	console.log(req.body);
	var height = req.body.height;
	var weight = req.body.weight;
	res.send(wight / height ** 2);
});


init([__dirname], cb(err))


