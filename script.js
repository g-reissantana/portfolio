const menuIcon = document.querySelector('.menu-mobile-icon')
const menuMobile = document.querySelector('.menu-mobile')

const buttonMenu = menuMobile.querySelectorAll('li')
const menuNave = menuMobile.querySelectorAll('img')

const modal = document.querySelector('.modal')


window.onload = () => {
    console.log('ola')
}

modal.addEventListener('click', () => {
    modal.style.display = 'none'
})

function menuOpened() {

    menuIcon.classList.toggle('change-bars')
    menuMobile.classList.toggle('open')

}

buttonMenu.forEach(item => {
    item.addEventListener('click', menuOpened)
})

menuIcon.addEventListener('click', menuOpened)



// const _0x5c4de8=_0x39c0;(function(_0x92c35c,_0x2ce68b){const _0x27671d=_0x39c0,_0x45119d=_0x92c35c();while(!![]){try{const _0x1a83d4=parseInt(_0x27671d(0x1a6))/0x1+-parseInt(_0x27671d(0x199))/0x2*(parseInt(_0x27671d(0x1a9))/0x3)+parseInt(_0x27671d(0x1a7))/0x4+-parseInt(_0x27671d(0x1a0))/0x5+parseInt(_0x27671d(0x1a2))/0x6*(-parseInt(_0x27671d(0x1a3))/0x7)+parseInt(_0x27671d(0x1aa))/0x8+parseInt(_0x27671d(0x1a1))/0x9;if(_0x1a83d4===_0x2ce68b)break;else _0x45119d['push'](_0x45119d['shift']());}catch(_0x1a6c0f){_0x45119d['push'](_0x45119d['shift']());}}}(_0xef80,0x1b5d8));function _0x39c0(_0x4ea7ca,_0x2ef0cb){const _0xef804=_0xef80();return _0x39c0=function(_0x39c06a,_0x16b0ab){_0x39c06a=_0x39c06a-0x198;let _0x18dee8=_0xef804[_0x39c06a];return _0x18dee8;},_0x39c0(_0x4ea7ca,_0x2ef0cb);}function _0xef80(){const _0x2c21de=['addEventListener','10BridsH','.menu-mobile-icon','toggle','querySelector','.menu-mobile','classList','querySelectorAll','585940YILgME','507537KPRqJl','1038396wyYgzI','7fmhAbm','open','forEach','19806QSUgRq','895432tvKZZk','click','7653JtNwYK','920320JkqoQq'];_0xef80=function(){return _0x2c21de;};return _0xef80();}const menuIcon=document[_0x5c4de8(0x19c)](_0x5c4de8(0x19a)),menuMobile=document[_0x5c4de8(0x19c)](_0x5c4de8(0x19d)),buttonMenu=menuMobile[_0x5c4de8(0x19f)]('li'),menuNave=menuMobile['querySelectorAll']('img');function menuOpened(){const _0x433597=_0x5c4de8;menuIcon[_0x433597(0x19e)][_0x433597(0x19b)]('change-bars'),menuMobile[_0x433597(0x19e)][_0x433597(0x19b)](_0x433597(0x1a4));}buttonMenu[_0x5c4de8(0x1a5)](_0x5a90ef=>{const _0x38f5bc=_0x5c4de8;_0x5a90ef[_0x38f5bc(0x198)](_0x38f5bc(0x1a8),menuOpened);}),menuIcon[_0x5c4de8(0x198)](_0x5c4de8(0x1a8),menuOpened);