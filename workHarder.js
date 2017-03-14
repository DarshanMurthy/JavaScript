function valueParents(value1,value2){
	this.value1=value1;
	this.value2= value2;
}
valueParents.prototype.value3="nametest";


test = new new valueParents("test1","test2");


console.log(test.value3)