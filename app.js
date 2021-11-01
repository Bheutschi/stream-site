// detecte quant on clique
// enlever la class "overlay-hidden"
// remetre la classe si clic dans vide
window.addEventListener("load", function (event) {
    document.getElementById('overlay').style.display = "none"
    let menuElements = document.getElementsByClassName('sub-menu')
    for (let menu of menuElements) {
        menu.style.display = "none"
    }
})

function toggleMenu() {
    let menu = document.getElementById('overlay')
    if (menu.style.display === "none") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}

function openandCloseDropdownMenu1() {
    let menu = document.getElementById('menu1')
    let icon = document.getElementById('nav-icon')
    if (menu.style.display === "none") {
        menu.style.display = "flex"
        icon.classList.add('rotate')
    } else {
        menu.style.display = "none"
        icon.classList.remove('rotate')
    }
}

function openandCloseDropdownMenu2() {
    let menu = document.getElementById('menu2')
    let icon = document.getElementById('info-icon')
    if (menu.style.display === "none") {
        menu.style.display = "flex"
        icon.classList.add('rotate')
    } else {
        menu.style.display = "none"
        icon.classList.remove('rotate')
    }
}

function openandCloseDropdownMenu3() {
    let menu = document.getElementById('menu3')
    let icon = document.getElementById('social-icon')
    if (menu.style.display === "none") {
        menu.style.display = "flex"
        icon.classList.add('rotate')
    } else {
        menu.style.display = "none"
        icon.classList.remove('rotate')
    }
}