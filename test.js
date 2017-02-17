function test(x){
	return x * x ;
}
var date = new Date(2009,11,2);
var te = new Date(100,12,3);



console.log(te)

function testify(y){
	return y*y;
}
console.log(testify(10));


function testcase(name,tests){
	
	for(var i in tests){
		console.log(i);

	}

	for(var i=0;i<10;i++){
		console.log(i);
	}
	var i=0;

	for(var j=0;j<100;j++){
		i=i+1;
		console.log(j*i)
	}

}


testcase("name",["darshan","murthy"]);






