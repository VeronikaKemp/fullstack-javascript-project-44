const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getQuestionandAnswer() {
  const question = getRandomInt(100);
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
