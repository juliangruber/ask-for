var readline = require('readline');

function askFor(questions, cb) {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  var answers = {};

  (function ask() {
    var question = questions.shift();
    rl.question(question+': ', function(answer) {
      answers[question] = answer;
      if (!questions.length) {
        rl.close();
        return cb(answers);
      }
      ask();
    });
  })();
}

module.exports = askFor;