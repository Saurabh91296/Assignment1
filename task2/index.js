var express= require('express');

var app=express();
var bodyParser=require("body-parser");
app.use("/",bodyParser.urlencoded({extended:false}));
app.set("view engine","pug");
app.set("views","./view");

app.use('/public',express.static(__dirname+"/public"));

app.post("/submit",function (req,res,next) {
    var name=req.body.name;
    var date=req.body.dob;
    var date_obj=new Date(date);
    console.log(date_obj);
});
app.listen(3000);
