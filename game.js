const gameSpace = document.getElementsByClassName('main__container')
const [container] = gameSpace

Array
.from(Array(20))
.forEach(() => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.addEventListener('click', () => {
        if(newCard.classList.contains('flipCard')){
        newCard.classList.remove('flipCard')
        newCard.classList.add('flipCardBack')
        } else {
        newCard.classList.add('flipCard')
        newCard.classList.remove('flipCardBack')
        }
    })
    
    container.appendChild(newCard)
})
