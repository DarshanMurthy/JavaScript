var temp = new Promise(function(resolve, reject){
	const value=100;
	if(value === 100){
		resolve("Success");
	}else{
		reject("Fails");
	}
});


console.log(temp);