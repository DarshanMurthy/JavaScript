const name = () => {
	return "name";
}
console.log(name)

function nameTest(name1, name2){
	this.name1 = name1;
	this.name2 = name2;
}

test.prototype.test3= "name3";


test = new nameTest("name1","name2");