function vehicle(vehicleType){
  this.vehicleType= vehicleType
  this.model="defaultType"
}
var testInstance = new vehicle("TesLA");

console.log(testInstance)
