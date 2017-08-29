function forEach(array,callback){
    for(var i=0;i<array.length;i++){
    callback(i,array[i]);
    }
}
var arr=[1,2,3,4,5];
forEach(arr,function (index,item) {
       console.log("ar["+index+"]= "+item*item);
});

function map(array,callback) {
    var array_new=[];
    for(var i=0;i<array.length;i++){
        array_new[i]=callback(array[i]);
    }
    return array_new;
}
var arr1=map(arr,function (item) {
    return item*item;
});
console.log(arr1);