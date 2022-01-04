buttonMenu.forEach((item) => {
    item.addEventListener('mouseenter' , (e) => {
        e.preventDefault()
        handleShowNave('show')
        console.log(item)
    })
    item.addEventListener('mouseleave' , (e) => {
        e.preventDefault()
        handleShowNave(e,'hide')
    })
})






if(cond == 'show') {
    menuNave.forEach((element) => {
        element.classList.remove('none')
    })
} else {
    menuNave.forEach((element) => {
        element.classList.add('none')
    })
}