// mobile nav menu

const mobileMenuIcon = $("#mobile-menu-icon")
const mobileMenuCloseIcon = $('#mobile-menu-close-icon')
const mobileMenu = $("#mobile-menu")

mobileMenuIcon.click(() => {
    mobileMenu.toggleClass('visible-menu')
})

mobileMenuCloseIcon.click(() => {
    mobileMenu.toggleClass('visible-menu')
})

// carousel

const carouselCards = $('.carousel-card')
const carouselLeftButton = $('#left-carousel-button')
const carouselRightButton = $('#right-carousel-button')

updateCarousel()

carouselLeftButton.click(() => {
    carouselCards.each(function () {
        let dataIndex = parseInt($(this).attr('data-index'))
        dataIndex = dataIndex - 1 < 0 ? carouselCards.length - 1 : dataIndex - 1
        $(this).attr('data-index', dataIndex)
    })
    updateCarousel()
})

carouselRightButton.click(() => {
    carouselCards.each(function () {
        let dataIndex = parseInt($(this).attr('data-index'))
        dataIndex = (dataIndex + 1) % carouselCards.length
        $(this).attr('data-index', dataIndex)
    })
    updateCarousel()
})

$(document).on("click", '.carousel-card[data-status=side-left]', function () {
    if ($(window).width() > 800) return
    console.log('clicked left')
    carouselCards.each(function () {
        let dataIndex = parseInt($(this).attr('data-index'))
        dataIndex = (dataIndex + 1) % carouselCards.length
        $(this).attr('data-index', dataIndex)
    })
    updateCarousel()
})

$(document).on("click", ".carousel-card[data-status=side-right]", function () {
    if ($(window).width() > 800) return
    console.log('clicked right')
    carouselCards.each(function () {

        let dataIndex = parseInt($(this).attr('data-index'))
        dataIndex = dataIndex - 1 < 0 ? carouselCards.length - 1 : dataIndex - 1
        $(this).attr('data-index', dataIndex)
    })
    updateCarousel()
})


function updateCarousel() {
    carouselCards.each(function () {
        const cardsCount = carouselCards.length
        const middleCardIndex = parseInt(cardsCount / 2)
        const dataIndex = parseInt($(this).attr('data-index'))

        if (dataIndex < middleCardIndex - 1) {
            $(this).attr("data-status", 'hidden-left')
        } else if (dataIndex > middleCardIndex + 1) {
            $(this).attr("data-status", 'hidden-right')
        } else if (dataIndex == middleCardIndex) {
            $(this).attr("data-status", 'center')
        } else if (dataIndex == middleCardIndex - 1) {
            $(this).attr("data-status", 'side-left')
        } else if (dataIndex == middleCardIndex + 1) {
            $(this).attr("data-status", 'side-right')
        }
    })
}