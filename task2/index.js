var express= require('express');

var app=express();
var bodyParser=require("body-parser");
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
app.use("/",bodyParser.urlencoded({extended:false}));
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

app.use(morgan('combined', {stream: accessLogStream}));
app.set("view engine","pug");
app.set("views","./views");

app.use('/',express.static(__dirname+"/public"));

app.post("/submit",function (req,res,next) {
    var name=req.body.name;
    var date=req.body.dob;
    var date_obj=new Date(date);
    var totalmilli=new Date()-date_obj;
    var milliperday=24*60*60*1000;
    var days=Math.round(totalmilli/milliperday);
   console.log(days);
    res.render(
        "index",
        {sometitle:"Age Calculator",name:name,days:days}
    );
});
app.listen(3000);
