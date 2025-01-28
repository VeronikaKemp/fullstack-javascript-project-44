const rules = 'Find the greatest common divisor of given numbers.';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function gcd(a, b) {
  let divisor;
  if (a === 0) {
    divisor = b;
  } else if (b === 0) {
    divisor = a;
  } else {
    while (a !== b) {
      if (a > b) {
        a -= b;
      } else {
        b -= a;
      }
    }
    divisor = a;
  }
  return divisor;
}

function getQuestionandAnswer() {
  const number1 = getRandomInt(50);
  const number2 = getRandomInt(50);
  const question = `${number1} ${number2}`;
  const correctAnswer = (gcd(number1, number2));
  const rightAnswer = correctAnswer.toString();
  return [question, rightAnswer];
}

export { rules, getQuestionandAnswer };
