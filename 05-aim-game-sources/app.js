const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

const setTime = (value) => {
  timeEl.innerHTML = `00:${value}`;
};

const finishGame = () => {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`;
};

const decreaseTime = () => {
  if (time === 0) {
    finishGame();
  } else {
    time -= 1;
    let current = time;
    if (current < 10) current = `0${time}`;
    setTime(current);
  }
};

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const getRandomColor = () => {
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);
  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
};

const createRandomCircle = () => {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add('circle');
  circle.style.background = `${getRandomColor()}`;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  board.append(circle);
};

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score += 1;
    event.target.remove();
    createRandomCircle();
  }
});

const startGame = () => {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
};

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'), 10);
    screens[1].classList.add('up');
    startGame();
  }
});
