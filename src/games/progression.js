import getRandomInt from '../utils.js';

const rules = 'What number is missing in the progression?';

const makeProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

function getQuestionandAnswer() {
  const length = getRandomInt(5, 9);
  const firstNum = getRandomInt(0, 100);
  const step = getRandomInt(1, 50);
  const questionArr = makeProgression(firstNum, step, length);
  const randomIndex = getRandomInt(0, questionArr.length);
  const correctAnswer = questionArr[randomIndex];
  const rightAnswer = correctAnswer.toString();
  const replacement = '..';
  questionArr[randomIndex] = replacement;
  const question = questionArr.join(' ');
  return [question, rightAnswer];
}

export { rules, getQuestionandAnswer };
