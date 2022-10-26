const price = document.querySelectorAll('.price')
const costInput = document.querySelector('.another-amount')
const text = document.querySelector('.text')

console.log(text.textContent);


price.forEach(el => el.addEventListener('click', ()=> {
    costInput.value = el.value
    text.textContent = Math.round(el.value / 250)
}))

costInput.addEventListener('input', function() {
    if(this.value.length > 4) {
        this.value = this.value.slice(0, 4)
    }
    price.forEach(item => item.value === this.value ? item.checked = true : item.checked = false)
    text.textContent = Math.round(this.value / 250)

})