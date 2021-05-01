console.log(0)

const resultBlock = document.querySelector('#result')
const pageNumberElement = document.querySelector('#page-number')
const clickMeButton = document.querySelector('#click-me')
const getTasksButton = document.querySelector('#get-tasks')


// createTask('new HTML')

// createTask('learn js').then((data) => {
//     debugger
//     console.log(data)
// })

// deleteTask('cc8783d1-3316-4d86-bab3-8877f30247d6')


updateTask('new title', 'cc8783d1-3316-4d86-bab3-8877f30247d6', true)



clickMeButton.addEventListener('click', () => {
    const promise = getImages(pageNumberElement.value)
    promise.then(onImagesReceived)
})

getTasksButton.addEventListener('click', () => {
    const promise = getTasks()
    promise.then(onTasksReceived)
})

function onTasksReceived(tasks) {
    tasks.forEach(task => {
            const li = document.createElement('li')
            li.innerHTML = task.title
            li.dataset.id = task.id
            document.querySelector('#tasks-result').appendChild(li)
        }
    )
}

// function onTasksReceived(tasks) {
//     const result = document.querySelector('#tasks-result')
//     result.innerHTML = ""
//
//     tasks.forEach(task => {
//             const li = document.createElement('li')
//             li.innerHTML = task.title
//             result.appendChild(li)
//         }
//     )}


function onImagesReceived(array) {
    array.forEach(el => {
            const img = document.createElement('img')
            img.src = el.thumbnail
            document.querySelector('#result').appendChild(img)
        }
    )
}

