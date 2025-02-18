/*Assignment 5-3: Convert the PIG app to objects*/
"use strict";

class Die {
	constructor() {}
	/**
	 * Method that calculates a random number between 1 and 6.
	 * @returns Calculated number.
	 */
	rollDie() {
		let random = Math.random();
		random = Math.floor(random * 6);
		return random + 1;
	}
}
