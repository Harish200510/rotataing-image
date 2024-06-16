const imageContainer=document.querySelector('.img-container');

const prev=document.getElementById("prev");

const next=document.getElementById("next");

let x=0;

let timer;

prev.addEventListener("click",() => {
    x=x+51.5;
    clearTimeout(timer);
    update();
    })
next.addEventListener("click",() => {
    x=x-51.5;
    clearTimeout(timer);
    update();
    
});
function update() {

  imageContainer.style.transform=`perspective(1000px) rotateY(${x}deg)`;
  timer=setTimeout(() => {
      x=x-51.5;
      update();
  },3000);
}

update();