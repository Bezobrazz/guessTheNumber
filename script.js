'use strict';

let getRandomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const checkNumberButton = document
  .querySelector('.check')
  .addEventListener('click', function () {
    let choosedNumber = Number(document.querySelector('.number-input').value);

    //No input
    const displayGuessMessage = function (message) {
      document.querySelector('.guess-message').textContent = message;
    };
    if (!choosedNumber) {
      displayGuessMessage('Введите число!');

      //Player won the game
    } else if (choosedNumber === getRandomNumber) {
      displayGuessMessage('Угадали!');
      document.querySelector('.question').textContent = getRandomNumber;
      document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
      document.querySelector('.question').style.width = '50rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      //Number from input is wronge
    } else if (choosedNumber !== getRandomNumber) {
      if (score > 1) {
        displayGuessMessage(
          choosedNumber > getRandomNumber
            ? 'Введите меньшее число!'
            : 'Введите большее число!'
        );

        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayGuessMessage('Game Over :(');
        document.querySelector('.score').textContent = 0;
      }
    }
  });

const startAgainButton = document
  .querySelector('.again')
  .addEventListener('click', function () {
    getRandomNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.number-input').value = '';
    displayGuessMessage('Начни угадывать!');
    document.querySelector('.question').textContent = '???';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('.question').style.width = '25rem';
  });
