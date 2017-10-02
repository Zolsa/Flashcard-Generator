var fs = require('fs');

var ClozeCard = function(subject, sentence, cloze) {

	this.fullText = sentence,
	this.cloze = cloze,
	this.partial = this.fullText.replace(this.cloze, '...'),
	this.writeFile = function() {
	  	fs.appendFile('cards.txt', '\nSubject: ' + subject + '\nQuestion: ' +  this.partial + '\nAnswer: ' + cloze, function(err) {
			if(err) {
				return console.log(err);
			} else {
				console.log('Content added');
			}
	  	});
	 },

	this.displayPartial = function() {
		console.log('\nSubject: ' + subject + '\nQuestion: ' +  sentence);
	},
	this.displayCloze = function() {
		console.log('Answer: ' + cloze);
	},	
	this.writeFile();
	
};

module.exports = ClozeCard;