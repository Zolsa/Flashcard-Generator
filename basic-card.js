var fs = require('fs');
var fullArray = [];


var BasicCard = function(subject, question, answer) {
	
	this.questionArray = [];

	this.question = question,
	this.answer = answer,
	this.questionArray.push(this.question);
	this.questionArray.push(this.answer);

	this.writeFile = function() {
	  	fs.appendFile('cards.txt', '\nSubject: ' + subject + '\nQuestion: ' +  question + '\nAnswer: ' + answer, function(err) {
			if(err) {
				return console.log(err);
			} else {
				console.log('Content added');
			}
	  	});
	},

	this.displayQuestion = function() {
		console.log('\nSubject: ' + subject + '\nQuestion: ' +  question);
	},
	this.displayAnswer = function() {
		console.log('Answer: ' + answer);
	}
	this.writeFile();
	
};

module.exports = BasicCard;