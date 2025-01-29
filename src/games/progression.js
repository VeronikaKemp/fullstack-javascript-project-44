const rules = 'What number is missing in the progression?';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

function getQuestionandAnswer() {
  const arrLength = getRandomInt(5, 9);
  const questionArr = [];
  const firstNum = getRandomInt(0, 100);
  questionArr.push(firstNum);
  const progressionStep = getRandomInt(1, 50);
  let nextNum = firstNum + progressionStep;
  questionArr.push(nextNum);
  for (let i = questionArr.length; i < arrLength; i += 1) {
    nextNum += progressionStep;
    questionArr.push(nextNum);
  }
  const randomIndex = getRandomInt(0, questionArr.length);
  const correctAnswer = questionArr[randomIndex];
  const rightAnswer = correctAnswer.toString();
  const replacement = '..';
  questionArr[randomIndex] = replacement;
  const question = questionArr.join(' ');
  return [question, rightAnswer];
}

export { rules, getQuestionandAnswer };
