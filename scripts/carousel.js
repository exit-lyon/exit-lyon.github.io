const carouselCards = $('.carousel-card')

let blockCarouselAutoPlay = false
let carouselAutoUpdateDelay = 5000

updateCarousel()

var carouselInterval = setInterval(carouselAutoPlay, carouselAutoUpdateDelay);

$(document).on("click", '.carousel-card[data-status=side-left]', function () {
    carouselCards.each(function () {
        let dataIndex = parseInt($(this).attr('data-index'))
        dataIndex = (dataIndex + 1) % carouselCards.length
        $(this).attr('data-index', dataIndex)
    })

    updateCarousel()
    clearCarouselAutoPlay()
})

$(document).on("click", ".carousel-card[data-status=side-right]", function () {
    carouselCards.each(function () {
        let dataIndex = parseInt($(this).attr('data-index'))
        dataIndex = dataIndex - 1 < 0 ? carouselCards.length - 1 : dataIndex - 1
        $(this).attr('data-index', dataIndex)
    })

    updateCarousel()
    clearCarouselAutoPlay()
})

function carouselAutoPlay() {
    carouselCards.each(function () {
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
            $(this).attr("data-center", false)
        } else if (dataIndex > middleCardIndex + 1) {
            $(this).attr("data-status", 'hidden-right')
            $(this).attr("data-center", false)
        } else if (dataIndex == middleCardIndex) {
            $(this).attr("data-status", 'center')
            setTimeout(() => {
                $(this).attr("data-center", true)
            }, 750);
        } else if (dataIndex == middleCardIndex - 1) {
            $(this).attr("data-status", 'side-left')
            $(this).attr("data-center", false)
        } else if (dataIndex == middleCardIndex + 1) {
            $(this).attr("data-status", 'side-right')
            $(this).attr("data-center", false)
        }
    })
}
