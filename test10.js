var name = () =>{
	return "darshan";
}

name()


const value = new Promise(
	function(reject,response){
		const value=100;
		if(value){
			response("SUCCESS");
		}
		else{
			reject("FAIL");
		}

});

console.log(value)

M={}
test = Object.assign(M,{"name":10});
console.log(test)


function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};


