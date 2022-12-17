function firstColorB() {
  const firstPalette = document.querySelectorAll('.color')[0];// a primeira paleta (preta) sempre vai iniciar com selected
  firstPalette.classList.add('selected');
}

const allPixel = document.querySelectorAll('.pixel');

function randomColor() { /// / gerador de color aleatoria para o rgb(combinações)
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}

const colors = document.querySelectorAll('.color');

function randomPalette() {
  for (let i = 1; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = randomColor(); // a função de gerar a cor é aplicada nas cores com exeção da preta.
  }
}
randomPalette();

function removeClass() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');// vai remover o selected
  }
}

function addClass() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', (event) => {
      removeClass(); // ...............a função remover é chamada aqui, pois se colors[i] tiver selected, ela vai remover
      event.target.classList.add('selected'); // vai adcionar a classe selected
    });
  }
}
addClass();

const boardInput = document.querySelector('#board-size');

const generateTableBtn = document.querySelector('#generate-board');

const pixelBoard = document.querySelector('#pixel-board');
console.log(pixelBoard);
const generateBtn = document.querySelector('#generate-board');


const row1 = document.querySelectorAll('.row');






const allPixelS = document.querySelector('.pixel').style.width;
console.log(allPixelS);

const boardSizeValue = document.querySelector('#board-size').innerHTML;


// console.log(selectedOne);

function setColor() {
  for (let i = 0; i < allPixel.length; i += 1) {
    allPixel[i].addEventListener('click', (event) => {
      const selectedOne = document.querySelector('.selected');
      event.target.style.backgroundColor = getComputedStyle(selectedOne, null).backgroundColor;
    });
  }
}

setColor();



const clearBtn = document.getElementById('clear-board');
// console.log(clearBtn);

function clearPixels() {
  for (let i = 0; i < allPixel.length; i += 1) {
    allPixel[i].style.backgroundColor = 'white';
  }
}

clearBtn.addEventListener('click', clearPixels);

const liChildren = document.querySelectorAll('li');

// console.log(liChildren);



generateBtn.addEventListener('click', generateMore);
window.onload = () => { firstColorB();} 