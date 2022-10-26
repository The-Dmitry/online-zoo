import animals from './animals'
import testimonials from './testimonials'

let body = document.body
let right = document.querySelector('.right')
let left = document.querySelector('.left')
let rows = document.querySelectorAll('.slider__row')
let slider = document.querySelector('.slider')
let slides = document.querySelectorAll('.slider__item')
let explanation = document.querySelector('.explanation')
let lala = document.querySelector('.row-1')

let sliderContainer = document.getElementsByClassName('slider-container')
let test2 = document.getElementsByClassName('slider-image')


function resize() {
    // console.log(explanation.offsetWidth);
    if(explanation.offsetWidth < 330) {
        [...sliderContainer].forEach(el => el.style.width = (explanation.offsetWidth - 20) + 'px')
    } else {
        [...sliderContainer].forEach(el => el.style.width = explanation.offsetWidth + 'px')
    }
}



window.addEventListener('resize', ()=> {
    resize()
    testimonialSize()
})

let count = 0
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let isEnabled = true

// function changeCurrentItem(n) {
// 	currentItem = (n + slides.length) % slides.length;
// }

function createRaw() {
    randomArray(arr)
    for(let i = 0; i < rows.length; i++) {
        let raw = document.createElement('div')
        raw.className = 'slider-container'
        for(let i = 0; i < 3; i++) {
            let item = document.createElement('div')
            item.className = `slider__item`
            item.innerHTML = `  <div class="slider-animal">
                                    <div class="slider-text-hover">
                                        <p class="slider-name">${animals[arr[count]].name}</p>
                                        <p class="slider-location">${animals[arr[count]].location}</p>
                                    </div>
                                    <img class="slider-image" src="${animals[arr[count]].image}" alt="">
                                </div>
                                <div class="slider-info">
                                    <div class="slider-text">
                                        <p class="slider-name">${animals[arr[count]].name}</p>
                                        <p class="slider-location">${animals[arr[count]].location}</p>
                                    </div>
                                    <div class="slider-meal">
                                    <img  src="${animals[arr[count]].meal}" alt="">
                                    </div>
                                </div>`
            raw.append(item)
            count++
        }
        rows[i].append(raw)
        resize()
    }
    count = 0
}

createRaw()


function moveRight(to, from) {
    if(isEnabled){
        isEnabled = false
        createRaw()
        rows.forEach(el => {
            el.children[0].classList.add(to)
            el.children[1].classList.add('next', from)
        })
        rows[0].children[0].addEventListener('animationend', function(){
            rows[0].children[0].remove()
            rows[1].children[0].remove()
            rows[0].children[0].classList.remove('next', 'from-right', 'from-left')
            rows[1].children[0].classList.remove('next', 'from-right', 'from-left')
            isEnabled = true
        })
    }
}


right.addEventListener('click', ()=> {
	moveRight('to-left', 'from-right')
})
left.addEventListener('click', ()=> {
    moveRight('to-right', 'from-left')
})


function randomArray(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}





let scroll = document.querySelector('.scroll-bar')
let testimonialsContainer = document.querySelector('.testimonials-container')

// console.log(animals.length);



function createTestimonail() {
    randomArray(arr2)
    for(let i = 0; i < testimonials.length; i++) {
        let li = document.createElement('li')
        li.className = `user-wrapper`
        li.innerHTML = `<div class="user-item">
        <div class="user-info">
            <div class="user-photo">
                <img src="${testimonials[arr2[i]].image}" alt="${testimonials[arr2[i]].name}">
            </div>
            <div class="user__container">
                <div class="user-name">${testimonials[arr2[i]].name}</div>
                <div class="furhter-info"><span>Local Austria</span><span>•</span><span>${testimonials[arr2[i]].day}</span></div>
            </div>
        </div>
        <p class="user-message">${testimonials[arr2[i]].message}</p>
    </div>`
    testimonialsContainer.append(li)
    // console.log(testimonials[0]);
    }
    testimonialSize()
}

createTestimonail()


scroll.addEventListener('input', function() {
    if(explanation.offsetWidth > 1100) {
        testimonialsContainer.style.left = `-${((testimonialsContainer.offsetWidth - explanation.offsetWidth) / 7) * this.value}px`
    } else {
        testimonialsContainer.style.left = `-${((testimonialsContainer.offsetWidth - explanation.offsetWidth) / 8) * this.value}px`
    }
    // testimonialSize()

})

let overlay = document.querySelector('.overlay')
let overlayContainer = document.querySelector('.overlay-container')
// let closeModal = document.querySelector('.close-modal')

testimonialsContainer.addEventListener('click', appendTestimonial)
testimonialsContainer.addEventListener('resize', ()=> {
    
})
overlay.addEventListener('click', (e)=> {
    if(e.target.closest('.user-wrapper') === null) {   
        closeTestimonial()
    }
})



function appendTestimonial(e) {
    if(body.offsetWidth < 915) {
        // console.log(e.target.closest('.user-wrapper'));
        let temp = e.target.closest('.user-wrapper')
        let node = temp.cloneNode(true)
        overlayContainer.appendChild(node)
        overlay.classList.add('overlay_display')
        body.classList.add('fixed-body')
        setTimeout(()=> {
            overlay.classList.add('overlay_visible')
        }, 50)
    }
}

function closeTestimonial() {
    overlay.classList.remove('overlay_display')
    overlay.classList.remove('overlay_visible')
    overlayContainer.children[1].remove()
    body.classList.remove('fixed-body')
}

// console.log(body);

function testimonialSize() {
    body.offsetWidth < 1170 ? scroll.setAttribute('max', 8) : scroll.setAttribute('max', 7)
    // explanation.offsetWidth === 1100 ? scroll.setAttribute('value', 0) : scroll.setAttribute('value', 0)\
    console.log(body.offsetWidth);
}


alert('В процессе выполнения работы, я увлёкся заменой svg, из-за чего возможны подтормаживания на брейкпоинтах.\n Времени на исправление нет - понять и простить) \n В случае аварийной ситуации стучать в дискорд Dman#6894 \n Удачи)')