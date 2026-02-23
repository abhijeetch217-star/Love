window.onload = ()=>{
  setTimeout(()=>{
    document.getElementById("loader").style.display="none";
  },1500);
};

let pages=document.querySelectorAll(".page");
let current=0;

function nextPage(){
  if(current < pages.length-1){
    pages[current].classList.remove("active");
    current++;
    pages[current].classList.add("active");
    restartTyping(pages[current]);
  }
}

function prevPage(){
  if(current > 0){
    pages[current].classList.remove("active");
    current--;
    pages[current].classList.add("active");
    restartTyping(pages[current]);
  }
}

function restartTyping(page){
  let t=page.querySelector(".typing");
  t.style.animation="none";
  t.offsetHeight;
  t.style.animation="";
}

/* FLOAT HEARTS */
let bg=document.getElementById("bg");
for(let i=0;i<25;i++){
  let h=document.createElement("span");
  h.innerHTML="💖";
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(15+Math.random()*20)+"px";
  h.style.animationDuration=(5+Math.random()*5)+"s";
  bg.appendChild(h);
}

/* HEART RAIN */
function heartRain(){
  for(let i=0;i<60;i++){
    let h=document.createElement("div");
    h.classList.add("heart");
    h.innerHTML="💗";
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=(15+Math.random()*20)+"px";
    h.style.animationDuration=(2+Math.random()*3)+"s";
    document.body.appendChild(h);

    setTimeout(()=>h.remove(),4000);
  }
}
