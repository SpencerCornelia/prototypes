/*3. Make a `Radio` constructor that takes in an `ownerName` and a `signalType` ("AM" or "FM"). 
  * Add a `setStation` method to your radio that allows the following ranges for a `station` property:
    * `535` to `1705` for "AM".
    * `88` to `108` for "FM".
  * Add a `listen` method that returns the following:
    * `"distorted music"` for "AM".
    * `"clear music"` for "FM".
  * SUPER BONUS: Add a `toggleSignal` method that lets you set `signalType` to `AM` or `FM`. Make sure the `station` 
  is valid when you toggle. Your radio should remember the `station` from the other signal type when you toggle.
  */
function Radio(ownerName,signalType) {
  	this.ownerName = ownerName;
  	this.signalType = signalType;
  	var setStation = this.setStation;	
  }

Radio.prototype.setStation = function(number) {
	this.station = number;
	if (this.signalType === "AM") {
		if (number >= 535 && number <= 1705) {
			this.setStation = number;
			return this.setStation;
		}
		else {
			return "Please choose a station between 535 and 1705";
		}
	}
	else if (this.signalType === "FM") {
		if (number >= 88 && number <= 108) {
			this.setStation = number;
			return this.setStation;
		}
	} 
	else {
		return "Sorry pal, that station does not exist.";
	} 	
}

Radio.prototype.listen = function(signalType) {
	if (signalType === "AM") {
		return "distorted music";
	}
	else {
		return "clear music";
	}
}

/*if I need to inegrate the listen method into the setStation method --> set some variable equal to true or false
which can then be placed into the if (true && signalType === "AM")...
*/