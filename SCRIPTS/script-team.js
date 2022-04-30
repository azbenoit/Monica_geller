"use strict"

const roles = document.querySelectorAll(".role");
const points = document.querySelectorAll(".point");
const names = []
const textphoto = document.querySelector(".textphoto");
console.log("textphoto")

for(let k=0; k<points.length; k++){
    const point = points[k]
    //append name to the names list
    names[k] = point.parentNode.id;
    //add the hover function
    point.addEventListener("mouseenter", hover);
    point.addEventListener("mouseleave", unhover);

    //add the send to the bottom function
    point.addEventListener("click", sendtorole);
    let role = point.nextElementSibling;
    role.addEventListener("click", sendtorole)
}

function hover(event){
    const pelement = event.currentTarget;
    const relement = pelement.nextElementSibling;
    relement.style.display = "block";
    pelement.classList.add("invisible");
    
}

function unhover(event){
    const pelement = event.currentTarget;
    const relement = pelement.nextElementSibling;
    relement.style.display = "none";
    pelement.classList.remove("invisible");
}

function sendtorole(event){
    console.log("hk");
    const element = event.currentTarget;
    const name = element.parentNode.id;
    const nameimg = document.getElementsByClassName(name);
    let index = names.indexOf(name, 0);
    let bottomY = element.parentNode.offsetParent.offsetHeight - element.parentNode.offsetTop - element.offsetHeight;
    let heighttextphoto = textphoto.offsetHeight;
    console.log(heighttextphoto);
    console.log(bottomY);
    //window.scrollBy(0, bottomY + index*heighttextphoto);
    window.scroll(0, event.clientY + bottomY + index*heighttextphoto);
}