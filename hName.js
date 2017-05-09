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

var nameKind = new Promise((reject, resolve)=>{
    var name=10;
    if(name<10){
        reject('test work')
    }
})



Promise.all([temp,test1,test23,nameKind]).then((M)=> {
    
})



