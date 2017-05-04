var name = Promise.resolve(2)
var name1 = Promise.resolve(8*7)


var temp = new Promise((reject,resolve) => {
    resolve(8*9)
});

var test1 = new Promise((reject,resolve) => {
    resolve(7*7)
});

var test23 = new Promise((reject,resolve) =>{
    resolve(9*7)
});

Promise.all([temp,test1,test23]).then((M)=> {
    console.log(M)
})

