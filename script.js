function firstColorB() {
  const firstPalette = document.querySelectorAll('.color')[0];
  firstPalette.classList.add('selected');
};

window.onload = firstColorB ();

const colors = document.querySelectorAll('.color');

function removeClass(){
    for(let i = 0; i < colors.length; i+=1){
        colors[i].classList.remove('selected');//vai remover o selected

    }
}

function addClass (){
    for(let i = 0; i < colors.length; i+=1){
        colors[i].addEventListener('click', function (event) {
            removeClass() //...............a função remover é chamada aqui, pois se colors[i] tiver selected, ela vai remover
            event.target.classList.add('selected') // vai adcionar a classe selected
         
        })

    }
}
addClass();

