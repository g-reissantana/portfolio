const menuIcon = document.querySelector('.menu-mobile-icon')
const menuMobile = document.querySelector('.menu-mobile')

const buttonMenu = menuMobile.querySelectorAll('li')
const menuNave = menuMobile.querySelectorAll('img')

function menuOpened() {

    menuIcon.classList.toggle('change-bars')
    menuMobile.classList.toggle('open')

}

buttonMenu.forEach(item => {
    item.addEventListener('click', menuOpened)
})

menuIcon.addEventListener('click', menuOpened)