var p1 = Promise((8*9)
var p2 = Promise(8)

var test = Promise.all([p1,p2]);

var test = new Promise((request,response)=>{
    response(9*8) 
});
test.then((value)=>{
    console.log(value)
});
