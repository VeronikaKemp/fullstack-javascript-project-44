import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const numSqrt = Math.sqrt(number);
  if (number < 2) {
    return false;
  }
  if (number % 2 === 0 && number !== 2) {
    return false;
  }
  for (let i = 2; i <= numSqrt; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

function getQuestionandAnswer() {
  const question = getRandomInt(0, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
}

export { rules, getQuestionandAnswer };
