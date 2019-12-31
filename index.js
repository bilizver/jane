const express  = require("express");
const app = express();
const bodyParser = require("bodyParser")

app.use(bodyParser.urlencoded({extended: true}))


app.get("/", function(request, response){
	response.send("hello");
});

app.get("/contact", function(req, res){

	res.send("Conctact me at: Jane");
});

app.get("/about", function(req, res)){
	res.send("im jane")
}
app.listen(3000, function(){
	console.log("server is up");
});


app.get("/", function(req, res){

	res.sendFile(__dirname + "/index.html"
})

