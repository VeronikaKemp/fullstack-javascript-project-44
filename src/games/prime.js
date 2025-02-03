import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getQuestionandAnswer() {
  const question = getRandomInt(0, 100);
  let rightAnswer;
  const numSqrt = Math.sqrt(question);
  if (question < 2) {
    rightAnswer = 'no';
  }
  if (question % 2 === 0 && question !== 2) {
    rightAnswer = 'no';
  }
  for (let i = 2; i <= numSqrt; i += 1) {
    if (question % i === 0) {
      rightAnswer = 'no';
      return [question, rightAnswer];
    }
  }
  rightAnswer = 'yes';
  return [question, rightAnswer];
}

export { rules, getQuestionandAnswer };
