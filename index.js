function init() {
    const main = document.querySelector("main")
    for (let i = 0; i < 15; i++) {
        const div = document.createElement("div")
        const size = Math.random() * 80 + 30
        div.style.height = size + "px"
        div.style.width = size + "px"
        div.style.borderRadius = "50%"
        div.style.position = "absolute"
        div.style.top = Math.random() * window.innerHeight + "px"
        div.style.left = Math.random() * window.innerWidth + "px"
        const deg=Math.floor(Math.random() * 150)
        div.style.backgroundImage =
            `repeating-linear-gradient(${deg}deg, #950d95, #950d95 ${size/13}px, transparent ${size/13}px, transparent ${size/10+size/9}px)`;
        div.style.zIndex = -1
        div.style.opacity=Math.random()+0.6
        main.appendChild(div)
    }
}

function toggleMenu(){
    const menu=document.querySelector(".menu")
    const header=document.querySelector("header")
    header.classList.toggle("header-is-active")
    menu.classList.toggle("menu-is-active")
}

init()

const works=document.querySelectorAll(".card-img")
works.forEach(element => {
    element.style.backgroundImage=`url("./imgs/${element.className.split(' ')[1]}.png")`
});