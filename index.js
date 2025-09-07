function init() {
    const main = document.querySelector("main")
    for (let i = 0; i < 12; i++) {
        const shapeFlag = Math.floor(Math.random() * 2)
        const div = document.createElement("div")
        const size = Math.random() * 100 + 70
        div.style.height = size + "px"
        div.style.width = size + "px"
        div.style.position = "absolute"
        div.style.top = Math.random() * window.innerHeight + "px"
        div.style.left = Math.random() * window.innerWidth + "px"
        const deg = Math.floor(Math.random() * 360)
        div.style.backgroundImage =
            `repeating-linear-gradient(${deg}deg, #950d95, #950d95 ${3}px, transparent ${3}px, transparent ${size / 30 + size / 9}px)`;
        div.style.zIndex = -2
        div.style.opacity = Math.random() + 0.6
        if (shapeFlag) {
            div.style.borderRadius = "50%"
        } else {
            div.style.clipPath = 
            `polygon(${Math.floor(Math.random()*30)}px ${Math.floor(Math.random()*30)}px,
            ${Math.floor(Math.random()*30+70)}px ${Math.floor(Math.random()*40+30)}px,
            ${Math.floor(Math.random()*30)}px ${Math.floor(Math.random()*20+80)}px)`
        }
        
        main.appendChild(div)
    }
}

function toggleMenu() {
    const menu = document.querySelector(".menu")
    const header = document.querySelector("header")
    header.classList.toggle("header-is-active")
    menu.classList.toggle("menu-is-active")
}

init()

const works = document.querySelectorAll(".card-img")
works.forEach(element => {
    element.style.backgroundImage = `url("./imgs/${element.className.split(' ')[1]}.png")`
});