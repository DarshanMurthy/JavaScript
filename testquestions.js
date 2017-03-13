var name = new Promise(function(reject,response){
	var name="darshu";
	if(name==="darshu"){
		reject("success");
	}else{
		response("fail");
	}
});

console.log(name)


var tem = new Promise(function(reject,response){
	var name="time";
	if(name){
		reject("success")
	}
});