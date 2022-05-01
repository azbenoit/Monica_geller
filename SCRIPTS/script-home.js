"use strict";

const walkers = document.querySelector(".walkers");
walkers.style.right = "0px";
walkers.style.bottom = "90px";
// console.log(walkers.right);
let speed = 4;
let i = 0;
let stop = 8;
let men = [walkers];
const explore = document.querySelector(".ourname");
explore.addEventListener("click", eClick);

// Clicking on Explore img
function eClick(event){
    const man = document.createElement("img");
    man.src = "pics/walkers.png";
    man.classList.add("walkers");
    man.alt = "walking dudes";
    man.style.right = "0px";
    man.style.bottom = "90px";
    document.querySelector("#walker_cont").appendChild(man);
    men.push(man);
}


// ANIMATION (kinda broken but left it like this bc it was funny :D) 
// (To fix create an array of indices so each man has his own)
requestAnimationFrame(animationLoop);
function animationLoop(event){
    for(const man of men){
        // sideways motion
        man.style.right = `${parseInt(man.style.right) + speed}px`;
        let bottom = parseInt(man.style.bottom);
        console.log();
        // up and down motion
        if (i <= stop){
            man.style.bottom = `${bottom + Math.floor(speed/2)}px`;
            i++;
        } else {
            man.style.bottom = `${bottom - Math.floor(speed/2)}px`;
            i++;
            if(i > 2*stop){
                i = 0;
            } 
        }
    }
    
    requestAnimationFrame(animationLoop);
}


// values 

const valuesbttn = document.querySelector(".valuesbutton");
valuesbttn.addEventListener("click", Clicked);

function Clicked(event){
    let values = document.querySelectorAll('.values')
    let values2 = [values]
    requestAnimationFrame(valuess);

    j = 0 
stop2 = 10 

function valuess(event){
    for(const value of values2){
        value.style.display = 'block';
        if (j <= stop2){
            value.style.bottom = `${bottom + Math.floor(speed/2)}px`;
            j++;
        } else {
            value.style.bottom = `${bottom - Math.floor(speed/2)}px`;
            j++;
            if(j > 2*stop2){
                j = 0;
            } 
        }
    }
}
    }
