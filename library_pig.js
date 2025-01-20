/*Assignment 5-3: Convert the PIG app to objects*/
"use strict";

class Pig {
	/**
	 * Constructor with class properties:
	 * die = Object of the Die Class.
	 * name = name of the player.
	 * total = player's current game total.
	 * turn = player's current turn total.
	 * roll = current number obtained after rolling the dice
	 */
	constructor() {
		this.die = new Die();
		this.name = "";
		this.total = 0;
		this.turn = 0;
		this.roll = 0;
	}
	/**
	 * Method that validates if the value obtained is 1.
	 */
	get isBust() {
		return this.roll == 1 ? true : false;
	}
	/**
	 * Method that rolls the dice, get the number and validates it.
	 */
	takeTurn() {
		this.roll = this.die.rollDie();

		// update or reset the turn property based on result of die roll
		this.turn = this.roll === 1 ? 0 : this.turn + this.roll;
	}
	/**
	 * Method that update the game total and reset roll and turn properties for next turn.
	 */
	hold() {
		// update the game total
		this.total = this.total + this.turn;
		// reset other properties for next turn
		this.roll = 0;
		this.turn = 0;
	}
	/**
	 * Method that reset everything for a new game.
	 */
	reset() {
		// reset all properties
		this.total = 0;
		this.roll = 0;
		this.turn = 0;
		$("#div_result").addClass("hide");
		$("#roll").prop("disabled", false);
		$("#hold").prop("disabled", false);
	}
}
