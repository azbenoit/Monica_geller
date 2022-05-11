"use strict";

const walkers = document.querySelector(".walkers");
walkers.style.right = "0px";
walkers.style.top = "380px";
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
    man.style.top = "380px";
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
let  j = 0;
let stop2 = 10;
let speed2 = 2; 
let leftPos = 35
let rightPos = 35

function Clicked(event){
    requestAnimationFrame(valuesss); }

function valuesss(currentTime){
    let values = document.querySelectorAll('.values')
    // canceling the display none 
    for(const value of values){
        value.style.display = 'block';
    }
    // the animation ?? i think its not selecting the y properly 
    let ints = document.querySelectorAll('.int')

    for (let k = 0; k<ints.length; k++) {
        const int = ints[k];
        console.log(int)
        
        if(j<=10){


            if (k%2===0){
                int.style.left = `${leftPos}%`;
                leftPos = leftPos+1;
            }
            else{
                int.style.right = `${rightPos}%`;
                rightPos = rightPos+1;
            }
            if(currentTime > 2000){
                if (k%2===0){
                    int.style.right = `${rightPos}%`;
                    rightPos = rightPos+1;
                }
                else{
                    int.style.left = `${leftPos}%`;
                    leftPos = leftPos+1;
                }
           }
           if(currentTime>4000){
               j++
           }    
        }
    } 
    requestAnimationFrame(valuesss)
}