var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName(){
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Hello " + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name')
    myHeading.textContent = "Hello " + storedName;
}

myButton.onclick = function(){
    setUserName();
}

function multiply(num1, num2){
    var result = num1 + num2;
    return(result);
}
console.log(multiply(4,4));

var myWholePage = document.querySelector('html')


myWholePage.onclick = function(){
    console.log('hello Saanvi Pandey')
}

var myImgChanger = document.querySelector('img');
myImgChanger.onclick = function(){
    var imageSrc = myImgChanger.getAttribute('src')
    if(imageSrc === 'images/selfie.jpg'){
        myImgChanger.setAttribute('src' , 'images/selfie1.jpg');
    } else {
        myImgChanger.setAttribute('src' , 'images/selfie.jpg')
    }
}