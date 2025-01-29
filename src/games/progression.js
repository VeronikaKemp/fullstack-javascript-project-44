const rules = 'What number is missing in the progression?';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

function getQuestionandAnswer() {
  const arrLength = getRandomInt(4, 9);
  const question = [];
  const firstNum = getRandomInt(0, 100);
  question.push(firstNum);
  console.log(firstNum);
  const progressionStep = getRandomInt(1, 50);
  console.log(progressionStep);
  let nextNum = firstNum + progressionStep;
  question.push(nextNum);
  for (let i = question.length; i < arrLength; i += 1) {
    nextNum += progressionStep;
    question.push(nextNum);
    console.log(nextNum);
  }
  const randomIndex = getRandomInt(0, question.length);
  const correctAnswer = question[randomIndex];
  const rightAnswer = correctAnswer.toString();
  const replacement = '..';
  question[randomIndex] = replacement;
  return [question, rightAnswer];
}

export { rules, getQuestionandAnswer };
