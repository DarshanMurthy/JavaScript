var p1 = Promise.resolve(3*3)
var p2 = Promise.resolve(7*7)
var p3 = Promise.resolve(8*8)
var p4 = Promise.resolve(0/0)
var p5 = Promise.resolve(8*8)

Promise.all([p1,p2,p3,p4,p5]).then(values =>{
    console.log(values[0])
}
);



