var temp = new Promise(function(resolve,reject){
	const value =100;
	if(value == 100 ){
		resolve("resolve");
	}else{
		reject("reject");
	}
});
console.log(temp)

var M = {}
Object.assign(M,{name:"darshan"})
console.log(M)