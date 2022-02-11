const [gameSpace] = document.getElementsByClassName('main__container')
const defaultImg = 'https://st3.depositphotos.com/4006379/13044/v/950/depositphotos_130445268-stock-illustration-cute-cartoon-cat-planet-in.jpg'
const images = [{imageUrl: 'https://pusheen.com/wp-content/uploads/2021/04/Plant-Hero.jpg', imageId: 'cat1'}, {imageUrl:'https://pusheen.com/wp-content/uploads/2020/12/What-Sweet-Quiz-SocialResults_Donut-1-e1608220861325.jpg', imageId: 'cat2'}, {imageUrl: 'https://pusheen.com/wp-content/uploads/2020/09/Preview-Image.jpg', imageId: 'cat3'}, {imageUrl: 'https://pusheen.com/wp-content/uploads/2019/12/Catfe-Drink_v2-34.jpg', imageId: 'cat4'}, {imageUrl: 'https://pusheen.com/wp-content/uploads/2019/08/Business.jpg', imageId: 'cat5'}, {imageUrl: 'https://pusheen.com/wp-content/uploads/2019/01/pusheen-fan.jpg', imageId: 'cat6'}, {imageUrl: 'https://pusheen.com/wp-content/uploads/2019/01/pusheen-kind.jpg', imageId: 'cat7'}, {imageUrl:'https://pusheen.com/wp-content/uploads/2020/04/How-well-do-you-know-Pusheen-and-co-12.jpg', imageId: 'cat8'},{imageUrl:'https://pusheen.com/wp-content/uploads/2019/01/pets.jpg', imageId: 'cat9'},{imageUrl: 'https://eredfox.pl/userdata/public/gfx/5464/e2cf7f245b438e4a90804e480726e261.jpg', imageId: 'cat10'}]
const [scoreCounter] = document.getElementsByClassName('main__counter')
let clickedImages = []
let results = []

images
    .concat(images)
    .sort((a, b) => 0.5 - Math.random())
    .forEach(item => {
        const newCard = document.createElement('div')
        newCard.classList.add('card')
        newCard.style.backgroundImage = `url(${defaultImg})`
        newCard.setAttribute('imgId', item.imageId)

        const flipCard = (element, id) => {
            const card = images.find(item => item.imageId === id)

            setTimeout(() => element.style.backgroundImage = `url(${card.imageUrl})`, 400)
            element.classList.add('flipCard')
            element.classList.remove('flipCardBack')
        }

        const flipCardBack = item => {
            item.classList.remove('flipCard')
            item.classList.add('flipCardBack')
            setTimeout(() => item.style.backgroundImage = `url(${defaultImg})`, 400)
        }

        gameSpace.appendChild(newCard)

        newCard.addEventListener('click', (event) => {
            const id = event.target.getAttribute('imgId')
            const numberOfFlippedElements = clickedImages.length
            if (results.includes(id)) {
                return
            }
            
            if (clickedImages.includes(id) && event.target.classList.contains('flipCard')) {
                return
            }
            
            if (numberOfFlippedElements === 2) {
                return
            }

            flipCard(event.target, id)
            
            if (numberOfFlippedElements === 1) {
                clickedImages = clickedImages.concat([id])
 
                const [first, second] = clickedImages

                if (first === second) {
                    scoreCounter.innerHTML = Number(scoreCounter.innerHTML) + 1
                    results = results.concat([id])
                    setTimeout(() => {
                        
                        clickedImages = []  
                    }, 2000) 

                    return
                    
                } else {

                    setTimeout(() => {
                        clickedImages.forEach(cardId => {
                            const targetCard = document.querySelector(`div.flipCard[imgId=${cardId}]`)
                            
                            flipCardBack(targetCard)
                        })

                        clickedImages = []  
                    }, 800)     
                                 
                }
                
                return
            }

            clickedImages = clickedImages.concat([id])
            setTimeout( (() => {
                if (clickedImages.length === 1){
                    flipCardBack(event.target)
                    clickedImages = []
                }
                
            }), 2000)
            
        })
    
    })
