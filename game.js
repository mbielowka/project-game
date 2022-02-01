const [gameSpace] = document.getElementsByClassName('main__container')

Array
    .from(Array(20))
    .forEach(() => {
        const newCard = document.createElement('div')
        newCard.classList.add('card')
        newCard.addEventListener('click', () => {
            if (newCard.classList.contains('flipCard')) {
                newCard.classList.remove('flipCard')
                newCard.classList.add('flipCardBack')
            } else {
                newCard.classList.add('flipCard')
                newCard.classList.remove('flipCardBack')
            }
        })
        
        gameSpace.appendChild(newCard)
    })
