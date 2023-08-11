const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    }) 
})

const hiddenElementsLeft = document.querySelectorAll('.hidden-left')
const hiddenElementsRight = document.querySelectorAll('.hidden-right')
hiddenElementsLeft.forEach((e) => observer.observe(e))
hiddenElementsRight.forEach((e) => observer.observe(e))
