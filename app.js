var express = require('express');
var app = express();
var path = require('path');

app.set("view engine","ejs");
app.use(express.static("modules"));


app.get('/', function (req, res) {
  res.render(path.join(__dirname+'/modules/prototypesExplained/index.ejs'));
});
  

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server is runing");
});