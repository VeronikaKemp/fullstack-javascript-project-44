#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName} !`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandomInt(100);
  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');

  const check = randomNumber % 2;
  let rightAnswer = '';
  if (check === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }

  const oppositeAnswer = (userAnswer === 'yes' ? 'no' : 'yes');

  if (userAnswer === rightAnswer) {
    console.log('Correct');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${oppositeAnswer}'.
Let's try again, ${userName}!`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
