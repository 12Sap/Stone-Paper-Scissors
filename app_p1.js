let div = document.querySelectorAll('.choice');

function gameFlow(userChoice, userScore, compScore) {
 let mes = document.querySelector('.message');
 let userSc = document.querySelector('.userSc');
 let compSc = document.querySelector('.compSc');
 let compIdxRng = ['stone', 'paper', 'scissors'];
 let compChoiceIdx = Math.floor(Math.random() * 3);
 let compChoice = compIdxRng[compChoiceIdx];
 console.log(`User: ${userChoice} Comp: ${compChoice}`);

 if (userChoice === compChoice) {
  console.log('Game was Draw.');
  mes.style.backgroundColor = 'black';
  mes.innerText = `Game was Draw. Computer chosen ${compChoice}`;
 } else if ((userChoice == 'stone' && compChoice == 'scissors') || (userChoice == 'paper' && compChoice == 'stone') || (userChoice == 'scissors' && compChoice == 'paper')) {
  console.log('User Wins.');
  userScore++;
  userSc.innerText = `${userScore}`;
  mes.style.backgroundColor = 'green';
  mes.innerText = `User Wins. Computer chosen ${compChoice}`;
 } else {
  console.log('user lose');
  compScore++;
  compSc.innerText = `${compScore}`;
  mes.style.backgroundColor = 'red';
  mes.innerText = `User Lost. Computer chosen ${compChoice}`;

 }}
 let mes = document.querySelector('.message');

 let userChoice;

 let userScore = 0;
 let compScore = 0;
 let Score;

 let choiceStone = document.querySelector('.stone');

 let choicePaper = document.querySelector('.paper');

 let choiceScissors = document.querySelector('.scissors');

 choiceStone.addEventListener('click', () => {
  userChoice = 'stone';
  gameFlow(userChoice, userScore, compScore);
  userScore = parseInt(document.querySelector('.userSc').innerText);
  compScore = parseInt(document.querySelector('.compSc').innerText);
 });

 choicePaper.addEventListener('click', () => {
  userChoice = 'paper';
  gameFlow(userChoice, userScore, compScore);
  userScore = parseInt(document.querySelector('.userSc').innerText);
  compScore = parseInt(document.querySelector('.compSc').innerText);

 });

 choiceScissors.addEventListener('click', () => {
  userChoice = 'scissors';
  gameFlow(userChoice, userScore, compScore);
  userScore = parseInt(document.querySelector('.userSc').innerText);
  compScore = parseInt(document.querySelector('.compSc').innerText);

 });