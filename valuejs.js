var name = Object.assign({},{"name":"Darshan"},{"name":"test"})

var p3 = new promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo')
});
var p4 = Promise.resolve(9*8)
console.log(p3)



Promise.all().then(values => {
    console.log(values);
})