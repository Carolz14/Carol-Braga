const servidorImg = "imgs/";

const nomeImg = ["formula1.png", "carolflix.png", "marvel.png"];

const linkImg = [
  "https://carolz14.github.io/Site-formula-1/",
  "https://carolz14.github.io/CarolFlix/",
  "https://carolz14.github.io/Site-marvel/",
];


let atual = 0;

const fotoEl = document.querySelector("#foto");
const linkEl =document.querySelector("#link"); 
const proximoEl = document.querySelector("#botao2");
const anteriorEl = document.querySelector("#botao1");

function atualizaImagem(incremento) {
  if (incremento == 1) {
    if (atual == 2) {
      atual = -1;
    }
    atual++;
  } else {
    if (atual == 0) {
      atual = 3;
    }
   atual--;
  }
  fotoEl.setAttribute(
    "src",
    servidorImg + nomeImg[atual]
  );
  linkEl.setAttribute( "href", linkImg[atual]); 
}

proximoEl.addEventListener("click", function () {
  atualizaImagem(1);
});

anteriorEl.addEventListener("click", function () {
  atualizaImagem(-1);
});

let bodyEl = document.querySelector('body'); 

let topoEL = document.querySelector(".topo");

bodyEl.addEventListener("wheel", function () {

    topoEL.classList.add('visivel'); 

    
})





/*Menu */


let botaoEl = document.querySelector('#alterna-menu');
let headerEl = document.querySelector('header');

function alternaMenu() {
  headerEl.classList.toggle('menu-visivel');
}

botaoEl.addEventListener('click', alternaMenu);