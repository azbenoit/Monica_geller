const img = document.querySelector(".photolore");
img.addEventListener('click',actionImage);

function actionImage(event) {
    const element = event.currentTarget;
    if(element.src.match("pics/lorephoto.jpg")) {
        element.src = "pics/lorephoto2.jpg";
    }
    else{
        element.src = "pics/lorephoto.jpg";
    }
}