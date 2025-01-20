/*Assignment 5-3: Convert the PIG app to objects*/
"use strict";

$(document).ready(() => {
	// Const variable to determine the score required to win the game
	const winningScore = 100;
	$("#winning_total").text(winningScore);
	$("#new_game").click(() => {
		// clear any previous data from the page
		$("#result").text("");
		$("#score1").val("0");
		$("#score2").val("0");
		$("#die").val("0");
		$("#total").val("0");

		// reset the game object and then start a new game, passing in
		// the players' names
		game.reset().start($("#player1").val(), $("#player2").val());

		// if the game object contains valid data...
		if (game.isValid) {
			// if statement that validates if the players' names are different
			if (game.isValidDifferentNames) {
				// Display the "turn" div
				$("#turn").removeClass("hide");
				// Display the name of the current player.
				$("#current").text(game.currentPlayer.name);
				$("#roll").focus();
			} else {
				alert("Please enter two different names.");
			}
		} else {
			// Hide the "turn" div
			$("#turn").addClass("hide");
			// Alert to notify the user to enter player names.
			alert("Please enter two player names.");
			$("#player1").focus();
		}
	}); // end click()

	$("#roll").click(() => {
		// Called the takeTurn method of Pig class to roll the dice, get the number and validates it.
		game.currentPlayer.takeTurn();
		// Display the value of the roll made in the takeTurn method.
		$("#die").val(game.currentPlayer.roll);
		// if statement that calls the read-only isBust property to check if the value obtained is 1.
		if (game.currentPlayer.isBust) {
			$("#total").val("0");
			// Call the changePlayer method to change the player that is rolling
			game.changePlayer();
			// Display the name of the player after the change
			$("#current").text(game.currentPlayer.name);
		} else {
			// Display the total value that the player have obtained during the turn
			$("#total").val(game.currentPlayer.turn);
		}
		$("#roll").focus();
	}); // end click()

	$("#hold").click(() => {
		// Called the hold method to end the current turn, save the value obtained during the turn, add it to the score and display it.
		game.hold($("#score1"), $("#score2"));
		// Called the checkWinner method to check if there is a winner after the hold action.
		let checkWinner = game.checkWinner(winningScore);
		// If statement that validates if there is a winner or no("none").
		if (checkWinner == "none") {
			// Reset the val of die and total.
			$("#die").val("0");
			$("#total").val("0");
			// Call the changePlayer method to change the player that is rolling.
			game.changePlayer();
			// Display the name of the player after the change.
			$("#current").text(game.currentPlayer.name);
			$("#roll").focus();
		} else {
			// Display the name of the player who won the game.
			$("#result").text(game.currentPlayer.name);
			// Show the div with the congratulations message
			$("#div_result").removeClass("hide");
			// Disabled the roll and hold button so the players cannot continue playing, they will need to star a new game.
			$("#roll").prop("disabled", true);
			$("#hold").prop("disabled", true);
		}
	}); // end click()

	// set focus on initial page load
	$("#player1").focus();
}); // end ready()
