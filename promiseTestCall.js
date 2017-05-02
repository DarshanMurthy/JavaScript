var p1 = Promise.resolve(3*3)
var p2 = Promise.resolve(7*7)
var p3 = Promise.resolve(8*8)
var p4 = Promise.resolve(0/0)
var p5 = Promise.resolve(8*8)

var p6  = new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'foo')
})
console.log(p6)


Promise.all([p1,p2,p3,p4,p5]).then(values =>{
    console.log(values[0])
}
);

Promise.all([p1,p2]).then(values=>{
    console.log(values)
} )



