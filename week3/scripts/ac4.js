document.addEventListener("click", printMousePos);
const display = document.getElementById('screen-coords');
const crossHairs = document.getElementById('crossHairs');
const imgCont = document.getElementById('imgCont');
let  gunShot = new Audio("./audio/GunSnglShotFireEx.mp3")
document.addEventListener('mousemove',moveXhairs);
function moveXhairs(event) {
crossHairs.style.left  = `${event.clientX-50}px`;
crossHairs.style.top  = `${event.clientY-50}px`;
console.log(crossHairs)
}
function printMousePos(event) {
    console.log(display)
    display.textContent =
      "clientX: " + event.clientX +
      " - clientY: " + event.clientY;
      gunShot.currentTime =0;
  gunShot.play();
      
      const tmp =document.createElement("img");
        tmp.src="./images/bHole.png"
        tmp.style.left  = `${event.clientX-50}px`;
        tmp.style.top  = `${event.clientY-50}px`;

        
        tmp.className = "fade-out";
        console.log(tmp)
       imgCont.appendChild(tmp)
}