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

let blockCarouselAutoPlay = false
let carouselAutoUpdateDelay = 5000

updateCarousel()

var carouselInterval = setInterval(carouselAutoPlay, carouselAutoUpdateDelay);

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
    carouselCards.each(function () {
        let dataIndex = parseInt($(this).attr('data-index'))
        dataIndex = (dataIndex + 1) % carouselCards.length
        $(this).attr('data-index', dataIndex)
    })
    $(this).attr('data-center', 'left')
    setTimeout(() => {
        $(this).attr('data-center', null)
    }, 750);
    updateCarousel()
    clearCarouselAutoPlay()
})

$(document).on("click", ".carousel-card[data-status=side-right]", function () {
    carouselCards.each(function () {
        let dataIndex = parseInt($(this).attr('data-index'))
        dataIndex = dataIndex - 1 < 0 ? carouselCards.length - 1 : dataIndex - 1
        $(this).attr('data-index', dataIndex)
    })
    $(this).attr('data-center', 'right')
    setTimeout(() => {
        $(this).attr('data-center', null)
    }, 750);
    updateCarousel()
    clearCarouselAutoPlay()
})

function carouselAutoPlay() {
    carouselCards.each(function () {
        if ($(this).attr("data-status") == 'side-right') {
            $(this).attr('data-center', 'right')
            setTimeout(() => {
                $(this).attr('data-center', null)
            }, 750);
        }

        let dataIndex = parseInt($(this).attr('data-index'))
        dataIndex = dataIndex - 1 < 0 ? carouselCards.length - 1 : dataIndex - 1
        $(this).attr('data-index', dataIndex)
    })
    updateCarousel()
}

var timeout

function clearCarouselAutoPlay() {
    clearInterval(carouselInterval)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        carouselInterval = setInterval(carouselAutoPlay, carouselAutoUpdateDelay)
    }, 10000);
}


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