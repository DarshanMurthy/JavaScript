var name = () => {
	return "name"+ "test_ideas"
}
console.log(name());

//http://underscorejs.org/#each


M={}
Object.assign(M,{"name":"darshan"});
console.log(M)


function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person.prototype.nationality = "English";
var myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather.firstName)




