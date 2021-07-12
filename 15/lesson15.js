// function Test(name){
//     this.name = name
// }
//
// let test = new Test('evegen')
//
// console.dir(Test)
// console.log(test );
// console.log(test.__proto__ === Test.prototype );
// console.log(Object.getPrototypeOf(test) === Test.prototype );
//
// class Test {
//     constructor(name) {
//         this.name = name
//     }
// }
//
// Test.prototype.YoYoc = 'yoyo'
//
// class Test2 extends Test {
//     constructor(name) {
//         super(name);
//     }
// }
//
// console.dir(Test2)
// let test = new Test('Yo')
// let test2 = new test.__proto__.constructor('bla')
// console.log(test2);
//
// function logItems(arr){
//     arr.forEach(console.log)
// }
//
// logItems([1,2,3])

// Array.prototype.logItems = function (){
//     this.forEach(console.log)
// }
//
// let testArr = [1, 2, 3, 4]
// testArr.logItems()
//
// class Animal {
//     constructor(name = 'Animal') {
//         this.name = name
//     }
//     sayHi(){
//         console.log('hi');
//     }
// }
//
// class Monkey extends Animal{
//     constructor(name) {
//         super(name);
//     }
// }
//
// class Human extends Monkey {
//     constructor(name) {
//         super(name);
//     }
// }
//
// let human1 = new Human('evggg')
//
// human1.sayHi()

Function.prototype._bind = function (context, ...args) {
    // const _this = this
    // return function (...args2){
    //     return _this.apply(context, [...args, ...args2])
    // }
    return (...args2) => this.apply(context, [...args, ...args2])
}

let obj = {
    name: 'evg',
    sayName(a, b){
        console.log('this.name: ', this.name);
        console.log('a: ', a);
        console.log('b: ', b);
    }
}

let obj2 = {
    name: 'Hanna'
}

let obj3 = {
    name: 'Yo'
}

let resultFunc = obj.sayName.bind(obj2, 10)
resultFunc(50)

const resultFunc2 = obj.sayName._bind(obj3, 75)
resultFunc2(150)


Function.prototype