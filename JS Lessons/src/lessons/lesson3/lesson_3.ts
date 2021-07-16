import {log} from 'util';

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


let a = 10

let prom = new Promise((resolve, reject) => {
    // some code
    let b = 10
    // some code
    setTimeout(() => {}, 0)// some async request
    resolve('oneArg') // success response
    reject('oneArg') // unsuccess response
})


let c = 10
//..






















// let prom = new Promise((resolve, reject) => {
//     let a = 10
//     // do some code
//     setTimeout(() => {
//         // resolve(15) // all ok
//         reject() // some error
//     }, 2000) // some async action
// }) // res, rej


// prom.then(res => {
//     console.log('resolve', res)
//     throw  -15
// },err => {
//     console.log('err', err)
//     throw -1
// })
//     .then(res2 => {
//         console.log('res2', res2)
//     }, err2 => {
//         console.log('err2', err2)
//     })

// let testProm = prom
//     .then(res => {
//         console.log('resolve', res)
//         return 50
//     }, rej => {
//     })
//
// console.log('testProm', testProm)
// testProm.then(res2 => {
//     console.log('res 2', res2)
// }, err2 => {
// })

// just a plug
export default () => {
};