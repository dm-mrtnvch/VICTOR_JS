// function getImagesOld(pageNumber) {
//     const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`)
//     return promise
// }


function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`)
    return promise.then((response) => {
        return response.data
    })
}



function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/js/tasks?widgetid=1226&count=2`)
    return promise.then((response) => {
        return response.data
    })
}


function createTask(title) {
    const promise = axios.post(`https://repetitora.net/api/js/tasks`, {
        widgetId: 1226,
        title: title
    })
    return promise.then((response) => {
        return response.data
    })
}


function updateTask(title, id, done ) {
    const promise = axios.put(`https://repetitora.net/api/js/tasks`, {
        widgetId: 1226,
        title: title,
        taskId: id,
        done: done
    })
    return promise.then((response) => {
        return response.data
    })
}


function deleteTask(title) {
    const promise = axios.delete(`https://repetitora.net/api/js/tasks/?widgetId=1226&taskId=cc8783d1-3316-4d86-bab3-8877f30247d6'`)
    return promise.then((response) => {
        return response.data
    })
}
