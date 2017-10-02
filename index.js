
var Inquirer = require('inquirer');
var fs = require('fs');
var BasicCard = require('./basic-card.js');
var ClozeCard = require('./cloze-card.js');
var fullArray = [];




var initialPrompt = function() {
	Inquirer.prompt([
	{
		type: "list",
		message: "What would you like to do?",
		choices: ["Create Flash Cards", "Use Flash Cards"],
		name: "initial",
	}])
	.then(function(response){
		if(response.initial === "Create Flash Cards") {
			cardPrompt();
		} else {			
			runGame();
		}
	});
};


var cardPrompt = function() {
	Inquirer.prompt([
	{
		type: "list",
		message: "What type of card do you want to make?",
		choices: ["Basic Flash Card", "Cloze Flash Card"],
		name: "type",
	}])
	.then(function(response) {
		if(response.type === "Basic Flash Card") {
			basicCardPrompts();
		} else {
			clozeCardPrompts();
		}
	});
};

var basicCardPrompts = function() {
	Inquirer.prompt([
	{
		type: "input",
		message: "Subject:",
		name: "subject",
	},
	{
		type: "input",
		message: "Question:",
		name: "question",
	},
	{
		type: "input",
		message: "Answer:",
		name: "answer",
	}])
	.then(function(response) {
		var subject = response.subject;
		var question = response.question;
		var answer = response.answer;
		var currentCard = new BasicCard(subject, question, answer);
	});
};

var clozeCardPrompts = function() {
	Inquirer.prompt([
	{
		type: "input",
		message: "Subject:",
		name: "subject",
	},
	{
		type: "input",
		message: "Full Sentence:",
		name: "sentence",
	},
	{
		type: "input",
		message: "Cloze:",
		name: "cloze",
	}])
	.then(function(response) {
		var subject = response.subject;
		var sentence = response.sentence;
		var cloze = response.cloze;
		var currentCard = new ClozeCard(subject, sentence, cloze);
	});
};



var runGame = function() {
	fs.readFile("cards.txt", "utf8", function(err, data) {
		if (err) {
	    	return console.log(err);
	  	} else {
	  		var questionArray = data.split("\n");
	  		function doSetTimeout(i) {
			  setTimeout(function() {console.log(questionArray[i] + '\n' + questionArray[i+1]); }, 5000);
			}

			for (var i = 0; i <= questionArray.length; i+=3) {
				console.log(questionArray[i] + '\n' + questionArray[i+1]);
				var waitTill1 = new Date(new Date().getTime() + 5 * 1000);
				while(waitTill1 > new Date()){};
				console.log(questionArray[i+2]);
				waitTill1 = new Date(new Date().getTime() + 5 * 1000);
				while(waitTill1 > new Date()){};
			}

	  	}
	  	
	});
};

initialPrompt();




