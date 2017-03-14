var namespace = function(test1, test2, test3){
	this.test1 = test1;
	this.test2 = test2;
	this.test3= test3;
}
namespace.prototype.test3= "namespace";
test = new namespace("a1","a2","a3");
console.log(test.test3)



