//1. set a timer for each page with a question//
//2. provide a multiple choice for answers//
//3. keep track of right&wrong answers (scoreboard)//
//4. decide how many total questions to test before resetting//

//At the start of the game, show alerts//
//The game loads after sencond alert"//

//Define variables//
var questions
var userAnswer = 0;
var answers = [];
var correctAnswer = 0;
var incorrectAnswer = 0;

//console.log(question);
//shows as undefined at this point//

function TriviaQuiz(questions) {
	this.questions = questions;
	this.timer = 0;
}

function TriviaQuestion(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//Making the list of questions//
var questions = [
new TriviaQuestion("number1?", ["A", "B", "C", "D"], "B"),
new TriviaQuestion("number2?", ["A", "B", "C", "D"], "B"),

];

console.log(questions);
//ERROR:question is still undefined!//

var quiz = new TriviaQuiz(questions);
console.log(quiz.questions)
// use quiz.timer









