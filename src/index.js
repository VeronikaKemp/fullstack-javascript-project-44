import readlineSync from 'readline-sync';

export default (rules, getData) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);

  console.log(rules);

  const iterations = 3;
  for (let i = 0; i < iterations; i += 1) {
    const [questionNum, rightAnswer] = getData();
    console.log(`Question ${questionNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
