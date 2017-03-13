function Person(lname,rname){
	this.lname=lname;
	this.rname=rname;
}

Person.prototype.eyecolor="red";
var p1 = new Person("darshan","murthy");
console.log(p1)

function Test(lname,rname){
	this.lname=lname;
	this.rname=rname;
}
Test.prototype.value="10";
test = new Test("name","ideas");
console.log(test)
