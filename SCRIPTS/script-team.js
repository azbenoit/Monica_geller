"use strict"

const roles = document.querySelectorAll(".role");
const points = document.querySelectorAll(".point");
const names = []
const textphoto = document.querySelector(".textphoto");

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
    console.log(index)
    console.log(names)
    let bottomY = element.parentNode.offsetParent.offsetHeight - element.parentNode.offsetTop - element.offsetHeight;
    let heighttextphoto = textphoto.offsetHeight;
    //window.scrollBy(0, bottomY + index*heighttextphoto);
    window.scroll(0, event.clientY + bottomY + index*heighttextphoto);
    
    //make the appearance of the text change for a bit
    const photo = document.querySelector('.'+name)
    if(index%2===0){
        photo.nextElementSibling.style.backgroundColor="rgba(226, 187, 78, 0.449)";
        console.log(photo.nextElementSibling.style)
        setTimeout(function(){
            photo.nextElementSibling.style.backgroundColor = "white";
        }, 1500);
        
    }
    else{
        photo.previousElementSibling.style.backgroundColor="rgba(226, 187, 78, 0.449)";
        setTimeout(function(){
            photo.previousElementSibling.style.backgroundColor = "white";
        }, 1500);
    }

}

