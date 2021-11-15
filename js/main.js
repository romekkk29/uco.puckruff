let imagen=document.querySelector(".imagen");


setTimeout(function(){ imagen.style.opacity="0.6"; }, 3000);

let menuBar=document.querySelector(".menu-bar");
let boton=document.querySelector(".boton");
boton.addEventListener("click",(e)=>{
e.preventDefault();
menuBar.classList.toggle("juan");
});