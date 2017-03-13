function Person(fname,lname,color){
	this.fname=fname;
	this.lname=lname;
	this.color=color;
}
Person.prototype.test="map1";
test = new Person("name","lastname","black");
console.log(test.test);

function Test(question1, question2){
	this.question1= question1;
	this.question2 = question2;
}
Test.prototype.question3="What is your name";
test= new Test("whatlife","late?");
console.log(test.question3)