/*Assignment 5-3: Convert the PIG app to objects*/
"use strict";

// Object literal named game
const game = {
	// Data properties
	player1: new Pig(),
	player2: new Pig(),
	currentPlayer: null,
	// Read-only property to check if the user entries are not empty.
	get isValid() {
		if (this.player1.name === "" || this.player2.name === "") {
			return false;
		} else {
			return true;
		}
	},
	// Read-only property to check if the user entries are different.
	get isValidDifferentNames() {
		if (this.player1.name == this.player2.name) {
			return false;
		} else {
			return true;
		}
	},
	/**
	 * Method that prepares the game when a new game is requested.
	 * @param {*} name1 Name of player 1.
	 * @param {*} name2 Name of player 2
	 * @returns
	 */
	start(name1, name2) {
		this.player1.name = name1;
		this.player2.name = name2;
		this.currentPlayer = this.player1;
		return this;
	},
	/**
	 * Method that resets everything for a new game.
	 * @returns
	 */
	reset() {
		// call the reset() method on each of the player Pig objects
		this.player1.reset();
		this.player2.reset();
		return this;
	},
	/**
	 * Method that changes the player that is rolling.
	 * @returns
	 */
	changePlayer() {
		// determine whether player1 or player2 is the current player, then
		// update the currentPlayer property to hold the other player.
		if (this.currentPlayer.name == this.player1.name) {
			this.currentPlayer = this.player2;
		} else {
			this.currentPlayer = this.player1;
		}
		return this;
	},
	/**
	 * Methods that ends the current turn, save the value obtained during the turn, add it to the score and display it.
	 * @param {*} score1 Player 1 score
	 * @param {*} score2 Player 2 score
	 * @returns
	 */
	hold(score1, score2) {
		// call the hold() method of the current player
		// determine whether player1 or player2 is the current player, then
		// update that player's score with the current total
		this.currentPlayer.hold();
		if (this.currentPlayer.name == this.player1.name) {
			this.player1.total = this.currentPlayer.total;
			score1.val(this.currentPlayer.total);
		} else {
			this.player2.total = this.currentPlayer.total;
			score2.val(this.currentPlayer.total);
		}
		return this;
	},
	/**
	 * Method that checks if there is a winner.
	 * @param {*} winningScore Score required to win the game.
	 * @returns
	 */
	checkWinner(winningScore) {
		// check the players' totals to see if either is at or above 100
		// points. If so, return that player's name. Otherwise, return
		// the string "none".
		if (parseInt(this.player1.total) >= winningScore) {
			return this.player1.name;
		} else if (parseInt(this.player2.total) >= winningScore) {
			return this.player2.name;
		} else {
			return "none";
		}
	},
};
