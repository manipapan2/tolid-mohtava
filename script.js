var screensize = document.getElementById("bodyFake").offsetHeight
console.log(screensize)

function start(){
    var charkheshia = document.getElementById("box-spin")
    var charkheshia2 = document.getElementById("box-spin2")
    var bb = document.getElementById("bb")
    var created = document.getElementById("created")
    var slider = document.getElementById("slider")
    charkheshia.classList.add("fadee")
    charkheshia2.classList.add("fadee")
    bb.classList.add("fadee")

    setTimeout(() => {
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
    }, "2700");

    setTimeout(() => {
        slider.style.opacity="1"
    }, "3700");
}