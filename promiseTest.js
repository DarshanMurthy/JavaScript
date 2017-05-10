var name = new Promise((request,resolve)=> {
    var test=10;
    resolve(test*test)
});

var temp = new Promise((resolve,reject)=>{
    var tp=100
    resolve(tp*tp)
});

Promise.all([name,temp]).then(values=>{
    console.log(values)
}, reason =>{
    console.log(reason)

});










