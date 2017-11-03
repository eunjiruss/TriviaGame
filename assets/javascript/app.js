//1. set a timer for each page with a question//
//2. provide a multiple choice for answers//
//3. keep track of right&wrong answers (scoreboard)//
//4. decide how many total questions to test before resetting//

//At the start of the game, show alerts//
//The game loads after sencond alert"//

//Define variables//
var userAnswer = 0;
var answers = [];
var correctAnswer = 0;
var incorrectAnswer = 0;

var numRounds = 0;

//console.log(question);
//shows as undefined at this point//
var questions = [
	new TriviaQuestion("number1?", ["This is a random", "B", "C", "D"], "A"),
	new TriviaQuestion("number2?", ["lol", "B", "C", "D"], "B"),
	new TriviaQuestion("number3?", ["jk", "B", "C", "D"], "C"),
	new TriviaQuestion("number4?", ["A", "B", "C", "D"], "D"),
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
    this.answer = answer;
}

function renderHTML() {
	$("#choice1").html(quiz.selected.choices[0]);
	$("#choice2").html(quiz.selected.choices[1]);
	$("#choice3").html(quiz.selected.choices[2]);
	$("#choice4").html(quiz.selected.choices[3]);

	$(".question").html(quiz.selected.text);
}

function onEndGame() {
	$("#roundButton").show();
}

function showQuestion() {
	quiz = new TriviaPlay(questions);
	renderHTML();
}

function onButtonClick(num) {
	if(quiz.selected.choices[num-1] == quiz.selected.answer) {
		correctAnswer++;
	}
	else {
		incorrectAnswer++;
	}

	$(".answers").html(quiz.selected.answer);

	++numRounds
	if (numRounds >= questions.length) {
		onEndGame();
		return;
	}

	showQuestion();
}

function registerEventListeners() {
	$( "#roundButton" ).click(function() {
		numRounds = 0;
		showQuestion();
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



