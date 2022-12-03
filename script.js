// created by manipapan2
var screensize = document.getElementById("bodyFake").offsetHeight
console.log(screensize)

function start(){
    var charkheshia = document.getElementById("box-spin")
    var charkheshia2 = document.getElementById("box-spin2")
    var bb = document.getElementById("bb")
    var created = document.getElementById("created")
    var slider = document.getElementById("slider")
    var goright = document.getElementById("goright")
    var goleft = document.getElementById("goleft")
    charkheshia.classList.add("fadee")
    charkheshia2.classList.add("fadee")
    bb.classList.add("fadee")

    bb.style.transform="scale(0.8)"

    setTimeout(() => {
        created.classList.remove("aslit")
        created.classList.add("fadeein")
    }, "200");

    
    setTimeout(() => {
        charkheshia.style.display="none"
        charkheshia2.style.display="none"
        bb.style.display="none"
    }, "700");


    setTimeout(() => {
        created.style.transform="scale(2)"
    }, "700");

    setTimeout(() => {
        created.classList.add("fadeasl")
    }, "1700");

    
    setTimeout(() => {
        created.style.opacity="0"
        slider.style.display="flex"
    }, "2700");

    setTimeout(() => {
        slider.classList.add("fad")
        goleft.classList.add("fad")
        goright.classList.add("fad")
    }, "2700");

    setTimeout(() => {
        slider.style.opacity="1"
        goright.style.opacity="1"
        goleft.style.opacity="1"
    }, "3700");

    setTimeout(() => {
        goright.style.pointerEvents="painted"
        goleft.style.pointerEvents="painted"
    }, "3800");
}


var f1 = document.getElementById("front")
var f2 = document.getElementById("alr")
var f3 = document.getElementById("basem")
var f4 = document.getElementById("backend")
var f5 = document.getElementById("json")
var f6 = document.getElementById("jsonformatter")


var f1d = window.getComputedStyle(f1).display;
var f2d = window.getComputedStyle(f2).display;
var f3d = window.getComputedStyle(f3).display;
var f4d = window.getComputedStyle(f4).display;
var f5d = window.getComputedStyle(f5).display;
var f6d = window.getComputedStyle(f5).display;



var imagess = [f1,f2,f3,f4,f5,f6]
if (f1d == "flex"){
    var goh = 0
}
else if (f2d == "flex"){
    var goh = 1
}
else if (f3d == "flex"){
    var goh = 2
}
else if (f4d == "flex"){
    var goh = 3
}
else if (f5d == "flex"){
    var goh = 4
}
else if (f5d == "flex"){
    var goh = 5
}



function clickright(){
    imagess[goh].style.display="none"
    goh += 1
    imagess[goh].style.display="flex"

    if(goh == 1){
        goleft.style.display="flex"
    }

    if(goh == 5){
        goright.style.display="none"
    }
}


function clickleft(){
    imagess[goh].style.display="none"
    goh -= 1
    imagess[goh].style.display="flex"

    if(goh == 0){
        goleft.style.display="none"
    }

    if(goh == 2){
        goright.style.display="flex"
    }
}

var alri = document.getElementById("alri")
function alerting(){
    if(alri.value == ""){
        alert("The input is empty")
    }
    
    else{
        alert(alri.value)
    }
    
}
// created by manipapan2