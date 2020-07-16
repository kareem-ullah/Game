var imagesArr = [
    "image/king.jpg",
    "image/joker.png",
    "image/queen.png",
    "image/card-1.jpg",
    "image/card-2.jpg",
    "image/card-3.png"
]

var viewImage = document.getElementById("viewCard");
var randomNum = Math.floor(Math.random()*6);
viewImage.src = imagesArr[randomNum];


function showImage(image){
    var randomNum1 = Math.floor(Math.random()*6);
    var image1 = document.getElementById(image);
    image1.src = imagesArr[randomNum1];

}