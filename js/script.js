

//buttons
const btndark1 = document.getElementById('btn-dark1');

btndark1.addEventListener('click', () => window.scrollTo({
  top: 851,
  behavior: 'smooth',
}));
const btndark2 = document.getElementById('btn-dark2');

btndark2.addEventListener('click', () => window.scrollTo({
  top: 851,
  behavior: 'smooth',
}));


const btnprimary1 = document.getElementById('btn-primary1');

btnprimary1.addEventListener('click', () => window.scrollTo({
  top: 3400,
  behavior: 'smooth',
}));
const btnprimary2 = document.getElementById('btn-primary2');

btnprimary2.addEventListener('click', () => window.scrollTo({
  top: 3400,
  behavior: 'smooth',
}));



//projetos
let interval0 = 0;
let maxSlider0 = document.querySelectorAll('.box-imagem0').length - 1;
acao0();

function acao0(){

  let img = document.querySelectorAll('.box-imagem0 img');

  setInterval(function(){

    img[interval0].style.display = 'none';
    interval0++;
    if(interval0 > maxSlider0){

      interval0 = 0
    }
    img[interval0].style.display = 'block'

  },2000)

}


let interval1 = 0;
let maxSlider1 = document.querySelectorAll('.box-imagem1').length - 1;
acao1();

function acao1(){

  let img = document.querySelectorAll('.box-imagem1 img');

  setInterval(function(){

    img[interval1].style.display = 'none';
    interval1++;
    if(interval1 > maxSlider1){

      interval1 = 0
    }
    img[interval1].style.display = 'block'

  },2000)

}


let interval2 = 0;
let maxSlider2 = document.querySelectorAll('.box-imagem2').length - 1;
acao2();

function acao2(){

  let img = document.querySelectorAll('.box-imagem2 img');

  setInterval(function(){

    img[interval2].style.display = 'none';
    interval2++;
    if(interval2 > maxSlider2){

      interval2 = 0
    }
    img[interval2].style.display = 'block'

  },2000)

}
