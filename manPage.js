var P1 = new Promise((resolve, reject) => {
    resolve(9*8)
});


var P2 = new Promise((resolve,reject) =>{
    resolve(10* 10)
});


var P3 = new Promise((resolve,reject)=>{
    resolve(10* 9)
})


var P4 = new Promise((resolve, reject)=>{
    reject(100 * 80)
})


Promise.all ([P1, P2, P3, P4]).then(values => {
    console.log(values)
},reason =>{
    console.log(reason)
});


