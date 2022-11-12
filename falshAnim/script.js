console.log("Hello There!");
let buttons = document.querySelectorAll("#buttons div");
playSound = (ev) =>{
    new Audio("sounds/" + ev.id + ".wav").play();
    ev.classList.add("flash")
    timeOut(ev.id);
}
timeOut = (sound) =>{
    setTimeout(() => {
        selected = document.getElementById(sound);
        selected.classList.remove("flash")
    }, 300);
};
buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        playSound(button);
    });
})
buttons.forEach((button) =>{
    document.addEventListener("keypress", (e) =>{
        if(e.key == button.role){
            playSound(button);
        }
    });
})