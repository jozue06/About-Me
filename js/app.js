'use strict';

var userPoints = 0;
//////GLOBAL VARIABLE THAT WILL STAY OUT OF THE FUNCTIONS


console.log('Josh\'s about me guessing game');

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');
alert('Hi ' + user + '! I am so glad you want to play my game. Let\'s see how much you can find out about me, ok?');
console.log('User\'s name is ' + user);



//game starts

// Array coding by Maxwell Ridiker
var gameArray = [['Do I like spaghetti?','Do I like rain?','Are Siberian Tigers my favorite animal?','Was I born in Lithuania?','Do I like living in Seattle?'], ['yes', 'no', 'yes', 'no', 'no']];

var correctAnswer = ['Yep, I really like spaghetti!', 'True, I do not like rain.','YES! Yes they are!', 'You\'re right ' + user + '. I was born in Belgium, not Lithuania', 'you\'re right, I don\'t like living in Seattle',];

var wrongAnswer = ['Not true, I do like spaghetti. Keep going.', 'What?! No!', 'Sorry, but that\'s wrong. I really like Siberian Tigers!', 'Nope, That\'s not true. I was born in Belgium.', 'No unfortunately I do not like living in Seattle.'];

var userAnswerArray = [];

function questionOne() {

  //asks the first question.
  for (var i = 0; i < 5; i++) {
    var yesOrNo = 0;
    do {
      var userAnswer = prompt(gameArray[0][i]).toLowerCase();
      userAnswerArray.push(userAnswer);
      console.log(userAnswer);
      if (userAnswer === 'yes' || userAnswer === 'no') {
        yesOrNo = 1;
      }
    } while (yesOrNo !== 1);

    if (userAnswer === (gameArray[1][i])) {
      alert(correctAnswer[i]);
      userPoints++; //if answer is correct, displays message and gives point
      console.log(''+ user + ' has ' + userPoints + ' point(s).'); //logs user points to debug in console if needed
    } else {
      alert(wrongAnswer[i]);
    }//if answer is incorrect, displays message and moves on without point
    console.log('' + user + '\'s answer to this question is '+ userAnswer); //logs the answer input to the question
  }
}
questionOne();
console.log('end of multidimensional array questions');

function questionSix() {
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
}
questionSix();

function questionSeven() {
  var randNum = Math.floor(Math.random() * Math.floor(10));
  var numOfGuess2 = 0;
  console.log(randNum);

  while (numOfGuess2 < 3){
    var guessRand = prompt('Guess a random number between 0-10!(you have 3 chances)');

    console.log('Your guess ' + guessRand);
    if (guessRand == randNum) {
      alert('Awesome you guessed the number!');
      console.log('you guessed the random number!');
      userPoints++;
      break;
    }
    if (guessRand > randNum) {
      alert('Too high');
      console.log('' + guessRand + ' is too high');  
    }
    if (guessRand < randNum) {
      alert('Too low');
      console.log('' + guessRand + ' is too low');
    }
    numOfGuess2++;
  }
}
questionSeven();

function questionEight() {
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
}
questionEight();

console.log(''+ user + ' has ' + userPoints + ' point(s).');


alert('That\'s it! lets see how you did: ' + user + ', You\'ve earned ' + userPoints + ' point(s) out of 8 total points.');
















//@jm6||