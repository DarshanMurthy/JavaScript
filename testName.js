var p1 = Promise.resolve(19*8);
console.log(p1)

var p2 = Promise.resolve(18*8)
console.log(p2)

var p3 = new Promise((resolve,reject) =>{
    setTimeout(resolve,100,'foo');
});

Promise.all([p1,p2,p3]).then(values => {
    console.log(values)
});
