/*4. Make a `CardDeck` constructor that returns an object with a `cards` property that is an array of `52` numbers, 
     `1..52`.
	* Write a method called `deal`  that randomly returns a "card" (a number from 1 .. 52) from `cards` and removes 
	  it from the `cards` array.
	* Write a method called `isFull` that returns `true` or `false` if all `52` cards are present.
	* Write a method called `cut` that randomly picks an index and returns an array of two arrays where the deck was
	  split at that index.
	* BONUS: write a `shuffle` method that mixes up all the cards. How does this change your `deal` method?
*/
function CardDeck() {
	this.cards = [];
	for (var i = 0; i <= 52; i++) {
		this.cards.push(i);
	}
}

CardDeck.prototype.deal = function(newDeck) {	
	var random = Math.round(Math.random()*52);
	console.log("The random number is : " + random);
	if (this.cards[random] === undefined) {
		console.log("Random is undefined");
		this.deal();
	}
	else {
		console.log("Random is in the array")
		this.cards.splice(random,1);
	}
	return this.cards;
}

//var cardDeck = new CardDeck()

CardDeck.prototype.isFull = function() {
	if (this.cards.length === 52) {
		return true;
	}
	else {
		return false;
	}
}

//no idea how to attack the cut method
CardDeck.prototype.cut = function(input) {
	this.input = input;
	var num = Math.round(Math.random()*52);
	var newDeck = this.cards;
	newDeck.splice(this.input,1);
	return newDeck;
}

CardDeck.prototype.shuffle = function(num) {
	var counter = 0;
	//var random = Math.round(Math.random()*52);
	while (counter < num) {
		for (var i = 0; i <= 52; i++) {
			this.cards[i] = Math.round(Math.random()*52);
			counter++;
		}
	}
	return this.cards;
}

