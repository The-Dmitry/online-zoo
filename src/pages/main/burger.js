let burgerButton = document.querySelector('.burger')
let burgerOverlay = document.getElementsByClassName('burger-overlay')

let bugerCross = document.getElementsByClassName('close-burger')
let bugerMenu = document.getElementsByClassName('burger-menu')

burgerButton.addEventListener('click', ()=> {
    createBurger()
    console.log(burgerOverlay);
})

document.body.addEventListener('click', (e)=> {
    // document.body.removeChild(burgerOverlay)
    // console.log(e.target);
    if(e.target.closest('.close-burger')) {
        closeBurger()
    }
    if(e.target === burgerOverlay[0]) {
        closeBurger()
    }

})


function createBurger() {
    let div = document.createElement('div')
    div.className = 'burger-overlay'
    div.innerHTML = `<div class="burger-menu">
                        <a href="./main.html" class="burger-logo">PetStory online</a>
                        <ul class="burger-navigation-list">
                            <li class="burger-navigation__item"><a href="./main.html" class="burger-navigation-link" >About</a></li>
                            <li class="burger-navigation__item"><a href="#" class="burger-navigation-link">Map</a></li>
                            <li class="burger-navigation__item"><a href="#" class="burger-navigation-link">Zoos</a></li>
                            <li class="burger-navigation__item"><a href="./donate.html" class="burger-navigation-link">Donate</a></li>
                            <li class="burger-navigation__item"><a href="#" class="burger-navigation-link">Contact us</a></li>
                            <li class="burger-navigation__item"><a href="https://www.figma.com/file/ypzT9idgAILaSRVRmDAJxn/online-zoo-3-weeks" target="_blank" class="burger-navigation-link">Designed by ©</a></li>
                        </ul>
                        <button class="close-burger"></button>
                    </div>`
    document.body.append(div)
    // burgerOverlay.classList.add('burger-overlay_open')
    setTimeout(openBurger, 200)
    // openBurger()
}

function openBurger() {
    bugerMenu[0].classList.add('burger-menu-open')
    document.body.classList.add('fixed-body')

}

function closeBurger() {
    bugerMenu[0].classList.remove('burger-menu-open')
    setTimeout(()=> {
        document.body.removeChild(burgerOverlay[0])
        document.body.classList.remove('fixed-body')
    },350)
}