console.log(0)

const resultBlock = document.querySelector('#result')
const pageNumberElement = document.querySelector('#page-number')
const clickMeButton = document.querySelector('#click-me')
clickMeButton.addEventListener('click', () => {
    const promise = getImages(pageNumberElement.value)
    promise.then(onDataReceived)
})

function onDataReceived(data) {
    data.forEach(el => {
            const img = document.createElement('img')
            img.src = el.thumbnail
            document.querySelector('#result').appendChild(img)
        }
    )}