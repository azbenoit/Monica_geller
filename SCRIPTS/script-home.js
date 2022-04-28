"use strict";

const walkers = document.querySelector("#walkers");
walkers.style.right = "0px";
walkers.style.bottom = "0px";
// console.log(walkers.right);
let speed = 4;
let i = 0;
let stop = 7;


requestAnimationFrame(animationLoop);
function animationLoop(event){
    // sideways motion
    walkers.style.right = `${parseInt(walkers.style.right) + speed}px`;
    let bottom = parseInt(walkers.style.bottom);
    console.log();
    // up and down motion
    if (i <= stop){
        walkers.style.bottom = `${bottom + 2}px`;
        i++;
    } else {
        walkers.style.bottom = `${bottom - 2}px`;
        i++;
        if(i > 2*stop){
            i = 0;
        } 
    }
    requestAnimationFrame(animationLoop);
}