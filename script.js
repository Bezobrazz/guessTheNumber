'use strict';

const getRandomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.question').textContent = getRandomNumber;

let score = 20;

const checkNumberButton = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const choosedNumber = Number(document.querySelector('.number-input').value);
    if (!choosedNumber) {
      document.querySelector('.guess-message').textContent = 'Введите число!';
    } else if (choosedNumber === getRandomNumber) {
      document.querySelector('.guess-message').textContent = 'Угадали!';
    } else if (choosedNumber > getRandomNumber) {
      if (score > 1) {
        document.querySelector('.guess-message').textContent =
          'Введите меньшее число!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.guess-message').textContent = 'Game Over :(';
      }
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
    } else if (choosedNumber > 20) {
      document.querySelector('.guess-message').textContent =
        'Введите число от 1 до 20!';
    }
  });
