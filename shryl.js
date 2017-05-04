var name = new Promise((reject,resolve)=>{
    var name=11;
    if (name==10){
        reject("The test is required ")
    }
    else{
        resolve(name*7)
    }

})

name.then((success)=>{
    console.log(success)
})

