#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName} !`);

console.log('What is the result of the expression?');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (let i = 0; i < 3; i += 1) {
  const number1 = getRandomInt(50);
  const number2 = getRandomInt(50);
  const operator = ['+', '-', '*'];
  const randomIndex = getRandomInt(2);
  const randomOperator = operator[randomIndex];
  console.log(`Question: ${number1} ${randomOperator} ${number2}`);

  let result;
  switch (randomOperator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    default:
      result = number1 * number2;
      break;
  }

  const check = result.toString();

  const userAnswer = readlineSync.question('Your answer: ');

  if (check === userAnswer) {
    console.log('Correct');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.
Let's try again, ${userName}!`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
