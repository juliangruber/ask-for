var askFor = require('./index');

askFor(['user', 'password', 'full name'], function(answers) {
  console.log(answers);
});