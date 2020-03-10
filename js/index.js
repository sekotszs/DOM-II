// Your code goes here

//KEYUP 1
let bodyColor = document.querySelector("body")
bodyColor.addEventListener("keyup",event => event.target.style.backgroundColor = '#DB7093')

//DOUBLECLICK 2
let pColor = document.querySelector("p")
pColor.addEventListener("dblclick", event => event.target.style.color ="purple")

//WHEEL 3
let logo = document.querySelector("h1.logo-heading");
logo.addEventListener("wheel", event => event.target.style.color = "red")

//MOUSEOVER 4
let mainImage = document.querySelector(".intro img")
this.addEventListener("mouseover", event => {
    mainImage.setAttribute("src", "img/EdwardNorton.jpg")
})

//DRAG 5
let secondImage = document.querySelector(".img-content img")
this.addEventListener("drag", event => {
    secondImage.setAttribute("src", "img/marla.jpg")
})


//CONTEXTMENU 6
let dest = document.querySelectorAll("div.destination p");
dest.forEach(element =>{
    element.addEventListener("contextmenu", event => event.target.style.color="green")
})

//MOUSEMOVE 7
let hColor = document.querySelector("h2");
hColor.addEventListener("mousemove", event => event.target.style.backgroundColor="black")

//MOUSEUP 8
let haColor = document.querySelector("h2");
haColor.addEventListener("mouseup", event => event.target.style.color="blue")

//CLICK 9
let bColor = document.querySelector("h4");
bColor.addEventListener("click", event => event.target.style.color= "hotpink")

//10
let logos = document.querySelector("h1.logo-heading");
logos.addEventListener("mouseout",event => event.target.style.backgroundColor = "yellow")