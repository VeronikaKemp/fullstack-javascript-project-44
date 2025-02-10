import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

function getQuestionandAnswer() {
  const isEven = (number) => number % 2 === 0;
  const question = getRandomInt(0, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
}

export { rules, getQuestionandAnswer };
