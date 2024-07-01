let navbarDiv=document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
   if(document.body.scrollTop>40 || document.documentElement.scrollTop>40){
    navbarDiv.classList.add('navbar-cng');
   }
   else{
    navbarDiv.classList.remove('navbar-cng');
   }
});
const navbarCollapseDiv=document.getElementById('navbar-collapse');
const navbarShowBtn=document.getElementById('navbar-show-btn');
const navbarCloseBtn=document.getElementById('navbar-close-btn');

navbarShowBtn.addEventListener('click',()=>{
  navbarCollapseDiv.classList.add('navbar-collapse-row');
})
navbarCloseBtn.addEventListener('click',()=>{
  navbarCollapseDiv.classList.remove('navbar-collapse-row');
})
document.addEventListener('click',(e)=>{
  if(e.target.id != 'navbar-collapse' && e.target!='navbar-show-btn' && e.target.parentElement.id !='navbar-show-btn'){
    navbarCollapseDiv.classList.remove('navbar-collapse-row');
  }
})

let resizerTimer;
window.addEventListener('resize-animation-stopper',()=>{
  document.body.classList.add('resize-animation-stopper')
  clearTimer(resizeTimer)
  resizeTimer=setTimeout(()=>{
    document.body.classList.remove('resize-animation-stopper');
  },600)
})

let video = document.querySelector('.video-wrapper video');
let playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});