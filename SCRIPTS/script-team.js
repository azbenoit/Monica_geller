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

    //add the function send to description 
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
    //scrolls down
    const element = event.currentTarget;
    const name = element.parentNode.id;
    const nameimg = document.getElementsByClassName(name);
    let index = names.indexOf(name, 0);
    let bottomY = element.parentNode.offsetParent.offsetHeight - element.parentNode.offsetTop - element.offsetHeight;
    let heighttextphoto = textphoto.offsetHeight;
    //window.scrollBy(0, bottomY + index*heighttextphoto);
    window.scroll(0, event.clientY + bottomY + index*heighttextphoto);
    
    //make the appearance of the text change for a bit
    console.log('.'+name)
    let photo = document.querySelector('.'+name)
    
    changeappearance(photo)
    setTimeout(photo.ogappearance,2000)
}

function changeappearance(el){
    const element = el.parentElement;
    console.log(element)
    console.log(element.children)
    console.log(element.children.length)
    for (let k=0; k<element.children.length; k++){
        console.log(element.children[k])
        element.children[k].style.backgroundcolor = "#ffc991|0.6";
    }
}

function appearanceAnim(currentTime){
    f
}