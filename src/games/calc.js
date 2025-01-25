const rules = 'What is the result of the expression?';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function calc(number1, number2, randomOperator) {
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
  return result;
}
function getQuestionandAnswer() {
  const number1 = getRandomInt(50);
  const number2 = getRandomInt(50);
  const operator = ['+', '-', '*'];
  const randomIndex = getRandomInt(2);
  const randomOperator = operator[randomIndex];
  const question = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = (calc(number1, number2, randomOperator)).toString();
  return [question, correctAnswer];
}

export { rules, getQuestionandAnswer };
