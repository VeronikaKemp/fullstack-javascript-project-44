import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

function getQuestionandAnswer() {
  const question = getRandomInt(0, 100);
  const check = question % 2;
  let rightAnswer = '';
  if (check === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return [question, rightAnswer];
}

export { rules, getQuestionandAnswer };
