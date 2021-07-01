// Task 3a
// (function () {
//     setTimeout(() => console.log(1), 100)
// })()
//
// console.log(2);
// let i = 0
// while (i < 50000000) {
//     i++
// }
//
// new Promise((resolve, reject) => {
//     setTimeout(() => console.log(3), 50)
// })
//
// function f(){
//     console.log(4);
// }
//
// Promise.resolve(console.log(5))

// 2 5 1 3


// task 1

// let car1 = new Promise((_, reject) => setTimeout(reject, 200 0, 'Car 1 crashed in'))
// let car2 = new Promise(resolve => setTimeout(resolve, 1500, 'Car 2 crashed in'))
// let car3 = new Promise(resolve => setTimeout(resolve, 3000, 'Car 3 crashed in'))
//
//
// Promise.race([car1, car2, car3])
// .then(value => {
//     let result = `${value} the race`
//     return console.log(result)
// })
// .catch(error => console.log('race is canceled', error))


// Task 2
// console.log('start')
// Promise.resolve('success').then(console.log)
// console.log('end');

// Task 3
// setCurrentUrl()
// console.log('the  current url is: ' + url);
//
// function setCurrentUrl(){
//     url = window.location.href
//

// // Task 4
// // какие ключи будут заполнены у pet1
//
// function Animal(size, type) {
//     this.type = type || 'Animal';
//     this.canTalk = false;
// }
//
// Animal.prototype.speak = function () {
//     if (this.canTalk) {
//         console.log('it spoke!');
//     }
// };
//
// let Pet = function (size, type, name, owner) {
//     Animal.call(this, size, type);
//     this.size = size;
//     this.name = name;
//     this.owner = owner;
// };
//
// Pet.prototype = Object.create(Animal.prototype);
// let pet1 = new Pet();
// console.log(pet1);
//
// // task 5
//
// let array = [1, 2, 3, 4, 4, 5, 4, 4]
// for(let i = 0; i < array.length; i++){
//     debugger
//     if(array[i] === 4) {
//         debugger
//         array.splice(1)
//     }
// }
// console.log(array);


// // Task5
// function Monster(){}
// Monster.prototype.growl = () => console.log('grrr!')
// console.log(new Monster().growl() === new Monster().growl());
//
//
// // Task 6
// let first = 'Who'
// let second = 'What'
// try {
//     try {
//         throw new Error('Sad trombone')
//     } catch (err) {
//         first = 'Why'
//         throw err
//     } finally {
//         second = 'When'
//     }
// } catch (err) {
//     second = 'Where'
// }
//
// console.log(first);
// console.log(second);

// Task 7
// setTimeout(() => console.log(1), 0)
// console.log(2)
// new Promise((resolve, reject) => {
//     setTimeout(() => reject(console.log(3), 1000))
// }).catch(() => console.log(4))
// console.log(5);
//
// // 2 5 1 3 4

// // Task 8
// let date = new Date(2020, 5, 10)
// let dateDisplayOptions = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
// }
//
// const formattedDate = date.toLocaleDateString('en', dateDisplayOptions)
// console.log(formattedDate);


// // Task 9
// let objBook = {title: 'JavaScript'}
// Object.preventExtensions(objBook)
// let newObjBook = objBook
// newObjBook.author = 'Robert'
//
// console.log(objBook);
// console.log(newObjBook);


// // Task 10
// function getAvailabilityMessage(item) {
//     if(getAvailability(item)){
//         var msg = 'Username available'
//     }
//     return msg
// }
//
// function getAvailability(name){
//     return name === 'Eugene'
// }
//
// console.log('getAvailabilityMessage', getAvailabilityMessage('newUserName'));

// // Task 11
// const entries = []
// entries.push('a')
// entries.push('b', 'c')
// console.log(entries.pop());

//
// // Task 12
// const entries = ['a', 1, true]
// console.log(entries instanceof Array);f

// // Task 13
// //НЕ РЕШАЛИ
// const priority = new Set(['High', 'Low'])
// function logSetElements(key, value, set) {
//     console.log(`s[${key}] = ${value}`);
// }
// priority.forEach(logSetElements)

// // Task 14
// const ids = new Set([1, '1'])
// console.log(ids.size);

// // Task 15
// const entries = ['a', 'b', 'c']
// entries.length = 10
// console.log(entries.length);
// console.log(entries);

// // Task 16
// const priority = [1, 2, 3]
// const priority100 = Array.from(
//     priority,
//     function (p){
//         return p * 10 + this.adjustment
//     },
//     {adjustment: 100}
// )
//
// console.log(priority100);


// // // Task 17
// // НЕ РЕШАЛИ
// const ratings = [1, 2, 3, 4, 5];
// const result = ratings.reduce((start, next, index, array) =>
//     start + next);
// console.log(result);


// // Task 18
// const priority = [, ,];
// for (const item of priority) {
//     console.log(item);
// }

// // Task 19
// const entries = ['a', 'b', 'c']
// const newEntries = entries.concat(['d', 'e', 'f'], 'g', 'h')
// console.log(newEntries.length);

// // Task 20
// const priority = ['Low', 'Normal', 'High']
// const [low, ...remaining] = priority
// console.log(remaining);

// // Task 21
// let task = {isDone: false}
// console.log(Object.prototype.isPrototypeOf(task));
//
// // Task 22
// let task1 = {id: 1}
// let task2 = {id: 2, priority: 100}
// let target = {}
// Object.assign(target, task1, task2)
// console.log(target);

// // Task 23
// 'use strict'
// let task = {id: 1}
// Object.freeze(task)
// task.id = 2
// task.action = 'Create'
// Object.defineProperty(task, 'priority', {value: 'High'})
// console.log(task);

// // Task 24
// let task = {
//     isDone: true,
//     estHours: 16
// }
// let anotherTask = task
// console.log(anotherTask.isDone);

// Task 25