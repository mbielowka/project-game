const gameSpace = document.getElementsByClassName('main__container')[0]

const gameCards = Array.from(Array(20))
gameCards.forEach(() => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.addEventListener('click', () => {
        newCard.classList.add('flipCard')
    })
    
    gameSpace.appendChild(newCard)
})
