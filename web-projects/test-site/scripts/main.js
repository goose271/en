var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-image.jpg') {
      myImage.setAttribute ('src','images/test-image2.png');
    } else {
      myImage.setAttribute ('src','images/test-image.jpg');
    }
}

var mybutton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Me First website site. " + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = "Me First website site. " + storedName;
}

mybutton.onclick =function() {
    setUserName();
}