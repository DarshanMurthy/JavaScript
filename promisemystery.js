testNode = function(name1,name2){
	this.name1= name1;
	this.name2 = name2;
}
test = new testNode("name1","name2");
console.log(test)


test = function node(name1){
	this.name1=name1;
}
test("name");