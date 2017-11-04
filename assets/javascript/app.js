//1. set a timer for each page with a question//
//2. provide a multiple choice for answers//
//3. keep track of right&wrong answers (scoreboard)//
//4. decide how many total questions to test before resetting//

//At the start of the game, show alerts//
//The game loads after sencond alert"//

//Define variables//
var correctAnswer = 0;
var incorrectAnswer = 0;
var numRounds = 0;

//console.log(question);
//shows as undefined at this point//
var questions = [
	new TriviaQuestion("Which of the following is not a boss in Diablo III, Act I?", ["Leoric", "Arneae", "The Butcher", "Maghda"], 3),
	new TriviaQuestion("Who are the three Prime Evils in the Diablo series", ["Baal", "Mephisto", "Rakanoth", "Diablo"], 2),
	new TriviaQuestion("What is the cheat command that reveals the entire map in Starcraft", ["Show me the map", "Black sheep wall", "Starcraft Map", "Reveal Regions"], 1),
	new TriviaQuestion("'Show me the money' acheieves what, in Starcraft", ["Gives you 10.000 gold", "Gives you 10,000 gas", "Gives you 10,000 ore and gas", "Gives you 10,000 ores"], 2),
	new TriviaQuestion("Which of the following character is NOT a healer in Overwatch", ["Mercy", "Zenyatta", "Lucio", "Mei"], 3),

];

var quiz = null;

//Computer will choose Triviaquestions radomly from questions//
function TriviaPlay(questions) {
	this.selected = questions[numRounds];
	this.timer = 0;
	console.log(this);
}

//Degines the array in Triviaquestion//
function TriviaQuestion(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = choices[answer];
}

function renderHTML() {
	// This can become undefined when we call renderHtml with
	// numrounds > choices.length(). For instance, if the user
	// keeps clicking on the buttons.
	//Couldn't get the game to revert back to start properly, so made it as undefined as a way to make it work//
	if (quiz.selected !== undefined) {
		$("#choice1").html(quiz.selected.choices[0]);
		$("#choice2").html(quiz.selected.choices[1]);
		$("#choice3").html(quiz.selected.choices[2]);
		$("#choice4").html(quiz.selected.choices[3]);

		$(".question").html(quiz.selected.text);
	}
}

function showQuestion() {
	quiz = new TriviaPlay(questions);
	renderHTML();
}

function onButtonClick(num) {

	// If a button is clicked after we've shown all
	// the questions, just return early and make sure
	// the button to restart is shown.
	// got the button function to work, but another button has to be clicked before the question moves to the next one; A bug I couldn't figure out//
	if (numRounds >= questions.length) {
		$("#roundButton").show();
		return;
	}

	// The rest of this code:
	//. - bumps up the number of rounds.
	//. - writes out the number of correct/incorrect answers.
	//. - writes out the real answer.
	//. - displays the next question.

	++numRounds;

	if(quiz.selected.choices[num-1] === quiz.selected.answer) {
		correctAnswer++;
		$("#correctAnswer").html("Correct: " + correctAnswer);
	}
	else {
		incorrectAnswer++;
		$("#incorrectAnswer").html("Incorrect: " + incorrectAnswer);
	}

	$(".answers").html("Real Answer: "  + quiz.selected.answer);

	showQuestion();
}

function registerEventListeners() {

	// Everything here needs to be installed **after** the DOM is loaded.

	$( "#roundButton" ).click(function() {
		location.reload();
	});
	$( "#roundButton").hide();

	$( "#button1" ).click(function() {
		onButtonClick(1);
	});

	$( "#button2" ).click(function() {
		onButtonClick(2);
	});

	$( "#button3" ).click(function() {
		onButtonClick(3);
	});

	$( "#button4" ).click(function() {
		onButtonClick(4);
	});
}

$(document).ready(function() {
	registerEventListeners();
	showQuestion();
});

//Getting the timer function to work with the existing code was difficult, where it would break rest of the code; 
//makung a separate function with window.onload so it'd show up as the page loads
//use $(#timer).on click to start as the gamestart button is pressed
//make the timer variable with specified laps
//make another div to show 00:00 on display
//set if function to keep the timer count down and stop when it reaches 0, or if all answers have been submitted
//reset the timer when gamereset button is pressed



