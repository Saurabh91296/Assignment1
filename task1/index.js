function setTimeoutSync(callback, n) {
   console.log("1");

    var date=new Date();
    while(new Date()-date<n){

    }
    callback(n);
    console.log(2);
}
setTimeoutSync(function (n) {

    // var date=new Date();
    // while(new Date()-date<n){
    //
    // }
    console.log("hello world 1");
},3000);
function hello() {
    console.log("hellofunc");
}
console.log("3");