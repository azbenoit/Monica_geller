"use strict"

const roles = document.querySelectorAll(".role");
const points = document.querySelectorAll(".point");

for(let k=0; k<points.length; k++){
    const point = points[k]
    //add the hover function
    point.addEventListener("mouseenter", hover);
    point.addEventListener("mouseleave", unhover)

}

function hover(event){
    const pelement = event.currentTarget;
    const relement = pelement.nextElementSibling;
    relement.style.display = "block";
    pelement.style.display = 'none';
}

function unhover(event){
    const pelement = event.currentTarget;
    const relement = pelement.nextElementSibling;
    relement.style.display = "none";
    pelement.style.display = 'block';
}