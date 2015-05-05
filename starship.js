/* 2. Make a `Starship` constructor that takes a `model` and `ownerName`. 
    * Give your `StarShip` a `setTopSpeed` method and a `getTopSpeed` method that let you change and read the `topSpeed`. 
    *Assume `topSpeed` is just a number.*
    * Give your `Starship` an `accelerateTo` method that sets `currentSpeed` to some number, 
    unless that number is greater than its `topSpeed`.
*/
function Starship(model,ownerName) {
	this.model = model;
	this.ownerName = ownerName;
	var modelTopSpeed;
	var currentSpeed = 0;
}

Starship.prototype.setTopSpeed = function(number) {
	modelTopSpeed = number;
	return modelTopSpeed;
}
Starship.prototype.getTopSpeed = function(model) {
	return modelTopSpeed;
}
Starship.prototype.accelerateTo = function(acceleration) {
	if (acceleration < modelTopSpeed) {
		var currentSpeed = 0;
		currentSpeed = (currentSpeed + acceleration);
		return currentSpeed;
		}
	else {
		return "Sorry, you need to buy a better Starship";
	}
}

var spencer = new Starship("acura","Spencer")
spencer.setTopSpeed(200)
200
spencer.getTopSpeed("acura")
200



