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
	new TriviaQuestion("number1?", ["This is a random", "B", "C", "D"], 0),
	new TriviaQuestion("number2?", ["lol", "B", "C", "D"], 1),
	new TriviaQuestion("number3?", ["jk", "B", "C", "D"], 2),
	new TriviaQuestion("number4?", ["A", "B", "C", "D"], 3),
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
	// Only write the html if the selected answer is valid.
	// This can become undefined when we call renderHtml with
	// numrounds > choices.length(). For instance, if the user
	// keeps clicking on the buttons.
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

	if(quiz.selected.choices[num-1] == quiz.selected.answer) {
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
	// which is why they are all in this function.

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



