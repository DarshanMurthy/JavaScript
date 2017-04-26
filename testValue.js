var test = Promise.resolve(3)
var life = Promise.resolve(4*4)
var station = Promise.resolve(7<<2)

Promise.all([test,life,station]).then(values => {
    console.log(values)
})
