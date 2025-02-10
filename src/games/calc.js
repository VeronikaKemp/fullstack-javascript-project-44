import getRandomInt from '../utils.js';

const rules = 'What is the result of the expression?';

function calc(number1, number2, randomOperator) {
  let result;
  switch (randomOperator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error(`Invalid operator - ${randomOperator}`);
  }
  return result;
}
function getQuestionandAnswer() {
  const number1 = getRandomInt(0, 50);
  const number2 = getRandomInt(0, 50);
  const operator = ['+', '-', '*'];
  const randomIndex = getRandomInt(0, 2);
  const randomOperator = operator[randomIndex];
  const question = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = (calc(number1, number2, randomOperator)).toString();
  return [question, correctAnswer];
}

export { rules, getQuestionandAnswer };
