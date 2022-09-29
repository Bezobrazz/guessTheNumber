'use strict';

let getRandomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const checkNumberButton = document
  .querySelector('.check')
  .addEventListener('click', function () {
    let choosedNumber = Number(document.querySelector('.number-input').value);

    //No input
    if (!choosedNumber) {
      document.querySelector('.guess-message').textContent = 'Введите число!';

      //Player won the game
    } else if (choosedNumber === getRandomNumber) {
      document.querySelector('.guess-message').textContent = 'Угадали!';
      document.querySelector('.question').textContent = getRandomNumber;
      document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
      document.querySelector('.question').style.width = '50rem';

      //To high
    } else if (choosedNumber > getRandomNumber) {
      if (score > 1) {
        document.querySelector('.guess-message').textContent =
          'Введите меньшее число!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.guess-message').textContent = 'Game Over :(';
      }

      //To low
    } else if (choosedNumber < getRandomNumber) {
      if (score > 1) {
        document.querySelector('.guess-message').textContent =
          'Введите большее число!';
        score--;
        document.querySelector('.score').textContent = score;

        console.log(choosedNumber);
      } else {
        document.querySelector('.guess-message').textContent = 'Game Over :(';
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
    document.querySelector('.guess-message').textContent = 'Начни угадывать!';
    document.querySelector('.question').textContent = '???';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('.question').style.width = '25rem';
  });
