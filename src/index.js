import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (rules, getData) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);

  console.log(rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [questionNum, rightAnswer] = getData();
    console.log(`Question: ${questionNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
