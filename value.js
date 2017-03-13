value = () => {
	return "darshan";
}

console.log(value())


value = function(name, value, thing){
	this.name= name;
	this.value= value;
	this.thing = thing;
}
Prototype.value.temp=100;

temp = new value("darshan",10,23)
console.log(temp)