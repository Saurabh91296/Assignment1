function setTimeoutSync(callback, n) {
   console.log("1");
    callback();
    var date=new Date();
    console.log("2");
}
setTimeoutSync(function () {
    console.log("hello world 1");
},3000);
//console.log("hello world 2");