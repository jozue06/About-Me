'use strict';

var userPoints = 0;

console.log('Josh\'s about me guessing game');

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');
alert('Hi ' + user + '! I am so glad you want to play my game. Let\'s see how much you can find out about me, ok?');
console.log('User\'s name is ' + user);

//game starts

//(function game() { /* found the basic code for this function @ https://www.codecademy.com/en/forum_questions/54de5c2586f552b10a0029b9 */

var yesOrNo = 0;
var answer2;
//asks the first question.
do {
  answer2 = prompt('Do I like spaghetti?' , 'type yes or no').toLowerCase();
  if (answer2 === 'yes' || answer2 === 'no') {
    yesOrNo = 1;
  }
} while (yesOrNo !== 1); //restricts answers to only yes or no.

if (answer2 === 'yes' && yesOrNo === 1) {
  alert('Yep, I really like spaghetti!');
  userPoints++; //if answer is correct, displays message and gives point
  console.log(''+ user + ' has ' + userPoints + ' point(s).'); //logs user points to debug in console if needed
} if (answer2 === 'no' && yesOrNo === 1) {
  alert('Not true, I do like spaghetti. Keep going.');
}//if answer is incorrect, displays message and moves on without point

console.log('' + user + '\'s answer to this question is '+ answer2); //logs the answer input to the question

var yesOrNo2 = 0;
var answer3;

do {
  answer3 = prompt('Do I like rain?' , 'type yes or no').toLowerCase();
  if (answer3 === 'yes' || answer3 === 'no') {
    yesOrNo2 = 1;
  }
} while (yesOrNo2 !== 1);

if (answer3 === 'yes' && yesOrNo2 === 1) {
  alert('what? no!');


} if (answer3 === 'no' && yesOrNo2 === 1) {
  alert('True, I do not like rain.');
  userPoints++;
}
console.log(''+ user + ' has ' + userPoints + ' point(s).');
console.log('' + user + '\'s answer to this question is '+ answer3);

var yesOrNo3 = 0;
var answer4;

do {
  answer4 = prompt('Do I like living in Seattle?' , 'type yes or no').toLowerCase();
  if (answer4 === 'yes' || answer4 === 'no') {
    yesOrNo3 = 1;
  }
} while (yesOrNo3 !== 1);

if (answer4 === 'yes' && yesOrNo3 === 1) {
  alert('No unfortunately I do not like living in Seattle.');

} if (answer4 === 'no' && yesOrNo3 === 1) {
  alert('you\'re right, I don\'t like living in Seattle');
  userPoints++;
}
console.log(''+ user + ' has ' + userPoints + ' point(s).');
console.log('' + user + '\'s answer to this question is '+ answer4);

var yesOrNo4 = 0;
var answer5;

do {
  answer5 = prompt('Are Siberian Tigers my favorite animal?' , 'type yes or no').toLowerCase();
  if (answer5 === 'yes' || answer5 === 'no') {
    yesOrNo4 = 1;
  }
} while (yesOrNo4 !== 1);

if (answer5 === 'yes' && yesOrNo4 === 1) {
  alert('YES! Yes they are!');
  userPoints++;
  console.log(''+ user + ' has ' + userPoints + ' point(s).');
} if (answer5 === 'no' && yesOrNo4 === 1) {
  alert('Sorry, but that\'s wrong. I _really_ like Siberian Tigers!');
}

console.log('' + user + '\'s answer to this question is '+ answer5);

var yesOrNo5 = 0;
var answer6;

do {
  answer6 = prompt('Was I born in Lithuania?' , 'type yes or no').toLowerCase();
  if (answer6 === 'yes' || answer6 === 'no') {
    yesOrNo5 = 1;
  }
} while (yesOrNo5 !== 1);

if (answer6 === 'yes' && yesOrNo5 === 1) {
  alert('Nope, That\'s not true. I was born in Belgium.');

} if (answer6 === 'no' && yesOrNo5 === 1) {
  alert('You\'re right ' + user + '. I was born in Belgium, not Lithuania');
  userPoints++;
  console.log(''+ user + ' has ' + userPoints + ' point(s).');
}
console.log('' + user + '\'s answer to this question is '+ answer5);

var numOfGuess = 0;
var favNum = '6';
while (numOfGuess < 3){
  var guess = prompt('Guess my Favorite number!(you have 3 chances)');

  console.log('Your guess ' + guess);
  if (guess === favNum) {
    alert('Awesome 6 is my favorite number!');
    console.log('Awesome 6 is my favorite number!');
    userPoints++;
    break;
  }
  if (guess > favNum) {
    alert('Too high');
    console.log('' + guess + ' is too high');  
  }
  if (guess < favNum) {
    alert('Too low');
    console.log('' + guess + ' is too low');
  }
  numOfGuess++;

}

var randNum = Math.floor(Math.random() * Math.floor(10));
var numOfGuess2 = 0;
console.log(randNum);
while (numOfGuess2 < 3){
  var guessRand = prompt('Guess a random number between 1-10!(you have 3 chances)');

  console.log('Your guess ' + guessRand);
  if (guessRand == randNum) {
    alert('Awesome you guessed the number!');
    console.log('you guessed the random number!');
    userPoints++;
    break;
  }
  if (guessRand > randNum) {
    alert('Too high');
    console.log('' + guess + ' is too high');  
  }
  if (guessRand < randNum) {
    alert('Too low');
    console.log('' + guess + ' is too low');
  }
  numOfGuess2++;

}
/*
var numOfGuess3 = 0;

while (numOfGuess3 < 5){
  var guessFood = prompt('Guess one of my favorite foods. (you have 5 chances.');
  console.log('Your guess ' + guessFood);
  var favFood = ['tacos','steak','pho','chilli'];
  if (guessFood === favFood[0] || guessFood === favFood[1] || guessFood === favFood[2] || guessFood === favFood[3]){
    alert('Awesome you guessed one!');
    console.log('Awesome ' + guessFood + ' is one of my favorites');
    userPoints++;
    break;
  }
  else if (guessFood !== favFood){
    alert('Sorry, try again!');
    numOfGuess3++;
  }

}

*/

var numOfGuess3 = 0;

while (numOfGuess3 < 5){
  var guessFood = prompt('Guess one of my favorite foods. (you have 5 chances.');
  console.log('Your guess ' + guessFood);
  var favFood = ['tacos','steak','pho','chilli'];
  for (var i = 0; i < favFood.length; i++){
    favFood[i];
    if (guessFood === favFood[i]){
      alert('Awesome you guessed one!');
      console.log('Awesome ' + guessFood + ' is one of my favorites');
      userPoints++;
      numOfGuess3 = 5;
      break;
    }
    else if (guessFood !== favFood[i]){
      alert('Sorry, try again!');
      numOfGuess3++;
    }
  }
}

console.log(''+ user + ' has ' + userPoints + ' point(s).');
//})();

alert('That\'s it! lets see how you did: ' + user + ', You\'ve earned ' + userPoints + ' point(s) out of 7 total points.');



















//@jm6||