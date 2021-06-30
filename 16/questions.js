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


// f