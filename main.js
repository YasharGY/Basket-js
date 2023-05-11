
const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');

function setRed() {
  redLight.style.background = 'red';
  yellowLight.style.background = '#111';
  greenLight.style.background = '#111';
  setTimeout(setYellow, 10000);
}

function setYellow() {
  redLight.style.background = '#111';
  yellowLight.style.background = 'yellow';
  greenLight.style.background = '#111';
  setTimeout(setGreen, 2000);
}

function setGreen() {
  redLight.style.background = '#111';
  yellowLight.style.background = '#111';
  greenLight.style.background = 'green';
  setTimeout(setRed, 15000);
}

setRed();
