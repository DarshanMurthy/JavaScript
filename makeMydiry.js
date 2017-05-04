var name1 = Promise.resolve(8*8)
var name2 = Promise.resolve(8*8)
var name3 = Promise.resolve(9*8)
var name4 = Promise.resolve(9*9)

var test = Promise.all([name1,name2,name3,name4]).then(val => {
    console.log(val)
})

var nametest  = new Promise((request,resolve)=>{

   resolve(9*9)

});



console.log(nametest)

