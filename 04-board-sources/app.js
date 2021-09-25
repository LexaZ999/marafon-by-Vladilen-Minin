const board = document.querySelector('#board');
const colors = ['Aqua', 'Cyan', 'LightCyan', 'PaleTurquoise', 'Aquamarine', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'CadetBlue', 'SteelBlue', 'LightSteelBlue', 'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue', 'DeepSkyBlue', 'DodgerBlue', 'CornflowerBlue', 'MediumSlateBlue', 'RoyalBlue', 'Blue', 'MediumBlue', 'DarkBlue', 'Navy', 'MidnightBlue'];
const SQUARES_NUMBER = 252;

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

const setColor = (element) => {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (element) => {
  element.style.backgroundColor = '#1d1d1d00';
  element.style.boxShadow = '0 0 2px #000';
};

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}
const container = document.querySelector('.container');
const button = document.querySelector('#btn');
const squares = document.querySelectorAll('.square');

button.addEventListener('click', () => {
  const image = document.getElementById('inputField').value;
  document.getElementById('inputField').value = '';

  squares.forEach((square) => {
    square.style.backgroundColor = '#1d1d1d';
    square.style.boxShadow = '0 0 2px #000';
  });

  if (!image) {
    container.style.backgroundImage = "url('https://images.wallpaperscraft.ru/image/single/shary_polet_nebo_priroda_91285_1280x720.jpg')";
  } else {
    container.style.backgroundImage = `url(${image})`;
  }
});
