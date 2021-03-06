// code for slide show of images
var myIndex = 0;
slideShow();

function slideShow() {
  var i;
  var x = document.getElementsByClassName("slider-img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) 
  {
    myIndex = 1
  }    
  x[myIndex-1].style.display = "block";  
  setTimeout(slideShow, 2000); // Change image every 2 seconds
}


// functions for toggling pop up
function togglePopup1(){
  document.getElementById("popup-1").classList.toggle("active");
}
function togglePopup2(){
  document.getElementById("popup-2").classList.toggle("active");
}
function togglePopup3(){
  document.getElementById("popup-3").classList.toggle("active");
}
function togglePopup4(){
  document.getElementById("popup-4").classList.toggle("active");
}
function togglePopup5(){
  document.getElementById("popup-5").classList.toggle("active");
}
function togglePopup6(){
  document.getElementById("popup-6").classList.toggle("active");
}
function togglePopup7(){
  document.getElementById("popup-7").classList.toggle("active");
}
function togglePopup8(){
  document.getElementById("popup-8").classList.toggle("active");
}
function togglePopup9(){
  document.getElementById("popup-9").classList.toggle("active");
}
function togglePopup10(){
  document.getElementById("popup-10").classList.toggle("active");
}
function togglePopup11(){
  document.getElementById("popup-11").classList.toggle("active");
}
function togglePopup12(){
  document.getElementById("popup-12").classList.toggle("active");
}
function togglePopup13(){
  document.getElementById("popup-13").classList.toggle("active");
}
function togglePopup14(){
  document.getElementById("popup-14").classList.toggle("active");
}
function togglePopup15(){
  document.getElementById("popup-15").classList.toggle("active");
}
function togglePopup16(){
  document.getElementById("popup-16").classList.toggle("active");
}


//  js function for map manipulation

function initMap() {
  
  var map = new google.maps.Map(document.getElementById('map'),{
    center: {lat:17.6805, lng:74.0183},
    zoom: 8,
  });

  var marker = new google.maps.marker({
    position:{lat:17.6939, lng:74.0120},
    map:map
  });
}  

// js for products dropdown menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

  document.getElementById('myTopnav').style.position = "sticky";
}

// function displayTitle() {
//   var title = document.getElementsByClassName('nav-title');
// }