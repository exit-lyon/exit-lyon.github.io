const mobileMenuIcon = $("#mobile-menu-icon")
const mobileMenuCloseIcon = $('#mobile-menu-close-icon')
const mobileMenu = $("#mobile-menu")
let buttonClicked = false

console.log(mobileMenuIcon)

mobileMenuIcon.click(() => {
    mobileMenu.toggleClass('visible-menu')
})

mobileMenuCloseIcon.click(() => {
    mobileMenu.toggleClass('visible-menu')
})