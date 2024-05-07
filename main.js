const menu = document.querySelector(".hamburger")
const slider = document.querySelector(".links")
const dark = document.querySelector(".dark")
const pcDark = document.querySelector(".dark2")
const darkTheme = document.querySelector("body")
const images = document.querySelector(".images-one")

menu.addEventListener("click", function(event){
    slider.classList.toggle("sliding-menu")
    menu.classList.toggle("exit")
})

dark.addEventListener("click", function(event){
    dark.classList.toggle("dark-theme")
    darkTheme.classList.toggle("dark-mode")
    images.classList.toggle("images-black")
})
pcDark.addEventListener("click", function(event){
    pcDark.classList.toggle("dark-theme")
    darkTheme.classList.toggle("dark-mode")
    images.classList.toggle("images-black")
})