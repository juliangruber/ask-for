var readline = require('readline');

function askFor(questions, cb) {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var answers = {};
  var i = 0;
	
  function handler(answer) {
  	var question = questions[i];
  	answers[question] = answer;
  	if (i == questions.length - 1) {
      rl.close();
      cb(answers);
    } else {
	    rl.question(questions[++i] + ': ', handler);
    }
  }

  rl.question(questions[0] + ': ', handler);
}

module.exports = askFor;