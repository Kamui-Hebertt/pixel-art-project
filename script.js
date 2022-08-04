function firstColorB() {
  const firstPalette = document.querySelectorAll('.color')[0];// a primeira paleta (preta) sempre vai iniciar com selected
  firstPalette.classList.add('selected');
};

window.onload = firstColorB (); // chama a função depois que recarrega a página.


function randomColor(){
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    return `rgb(${r}, ${g}, ${b})`;
}



const colors = document.querySelectorAll('.color');

function randomPalette (){
    for(let i = 1; i < colors.length; i+=1){
         colors[i].style.backgroundColor = randomColor();
         
    }
}
randomPalette();

function removeClass() {
    for(let i = 0; i < colors.length; i+=1){
        colors[i].classList.remove('selected');//vai remover o selected

    }
}

function addClass () {
    for(let i = 0; i < colors.length; i+=1){
        colors[i].addEventListener('click', function (event) {
            removeClass() //...............a função remover é chamada aqui, pois se colors[i] tiver selected, ela vai remover
            event.target.classList.add('selected') // vai adcionar a classe selected
         
        })

    }
}
addClass();

const allPixel = document.querySelectorAll('.pixel');


const selectedOne = document.querySelector('.selected');
            console.log(selectedOne);
            


function setColor(){
    for (let i = 0; i < allPixel.length; i+=1){

        allPixel[i].addEventListener('click', (event)=>{
            const selectedOne = document.querySelector('.selected');
            event.target.style.backgroundColor = getComputedStyle( selectedOne, null).backgroundColor;
            
        })
    }


}

setColor();


let clearBtn = document.getElementById('clear-board');
console.log(clearBtn);

function clearPixels () {
   for(let i = 0; i < allPixel.length; i+=1){
allPixel[i].style.backgroundColor = "white"
} }

clearBtn.addEventListener('click', clearPixels);

let liChildren = document.querySelectorAll('li');
console.log(liChildren);








 




