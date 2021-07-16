console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

//
// let a = 10
//
// let prom = new Promise((resolve, reject) => {
//     // some code
//     let b = 10
//     // some code
//     setTimeout(() => {}, 0)// some async request
//     resolve('oneArg') // success response
//     reject('oneArg') // unsuccess response
// })
//
//
// let c = 10




let prom = new Promise((resolve, rej) => {
    // resolve(1)
    rej('error')
})


// for resolve
// prom.then(res => {
//     console.log('then res', res)
//     //@ts-ignore
//     return res += 10
// }, err => {})
//     .then(res2 => {
//         console.log('then res2', res2)
//         return res2 + 10
//     })
//     .then(res3 => {
//         console.log('then res3', res3)
//         return res3 + 10
//     })


// prom.then(res => {
//     console.log('then res', res)
//     //@ts-ignore
//     return res += 10
// }, err => {
//     console.log('then err', err)
//     throw 'New Error'
//     // return 'Success'
//
// })
//     .then(res2 => {
//         console.log('then res2', res2)
//         return res2 + 10
//     }, err2 => {
//         console.log('then err2', err2 )
//     })
//     .then(res3 => {
//         console.log('then res3', res3)
//         return res3 + 10
//     }, err => {
//
//     })


prom
    .then(res => {
        console.log('res', res)
        throw -1
        //@ts-ignore
        res +=10
        return res
    })
    //@ts-ignore
    .finally(res => {
        console.log('finally res', res)
        return 50
    })
    .catch(err => {
        console.log('err', err)
        return 'ok'
    })
    .then(res2 => {
        console.log('res2', res2)
        //@ts-ignore
        return res2 + 10
    })
    .then(res3 => {
        console.log('res3', res3)
    })
    .catch(err2 => {
        console.log('err', err2 )
        throw 'yo'
        return 50
    })
    .then(res4 => {
        console.log('res4', res4)
    })
    .catch(err3 => {
        console.log('err2', err3)
        return 1
    })
    .then(res5 => {
        console.log('res5', res5)
    })


//..




// just a plug
export default ()=>{};