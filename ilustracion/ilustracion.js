const imgList = document.querySelectorAll(`img`);
const ligthbox = document.querySelector(`.lightbox`);
const grande = document.querySelector(`.grande`);
const closebtn = document.querySelector(`.close`);
const removeNav = document.querySelector(`.container-navegation`);


imgList.forEach(( eachImg , index )=>{
    imgList[index].addEventListener(`pointerdown`,()=> {
       ligthbox.classList.add(`isactive`)
       grande.src = imgList[index].src
       removeNav.setAttribute('style', 'display:none')
    })
 });
 
 closebtn.addEventListener(`pointerdown`,()=>{
   ligthbox.classList.remove(`isactive`)
   removeNav.setAttribute('style', 'display:flex')
 })
 