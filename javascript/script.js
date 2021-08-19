//Aparecer elementos

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
  const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
  target.forEach(function(element){
    if((windowTop) > element.offsetTop){
      element.classList.add(animationClass);
    }else{
      element.classList.remove(animationClass)
    }
    
    
  })
}

animeScroll()

if(target.length){
  window.addEventListener('scroll', function(){
    animeScroll();
  });
}

//Scroll para elementos

const menuItems = document.querySelectorAll('.navbar-nav a[href^="#"]');

menuItems.forEach(item =>{
  item.addEventListener('click', scrollForClick);
})

function getScrollHref(element){

  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollForClick(event){
  event.preventDefault();
  const to = getScrollHref(event.target) -20;

  scrollToPosition(to)
}

function scrollToPosition (to){
  window.scroll({
    top:to,
    behavior: "smooth" 
    })
}

//Buttons banner
const bannerItems = document.querySelectorAll('.buttons-banner a[href^="#"]');

bannerItems.forEach(item =>{
  item.addEventListener('click', scrollForClick);
})

function getScrollHrefBanner(element){

  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollForClickBanner(event){
  event.preventDefault();
  const to = getScrollHrefBanner(event.target) - 20;

  scrollToPositionBanner(to)
}

function scrollToPositionBanner (to){
  window.scroll({
    top:to,
    behavior: "smooth" 
    })
}
