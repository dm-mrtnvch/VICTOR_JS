console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA


// console.dir(function (){})
// class Test2 {}
// console.dir(Test)
// //
//
// //@ts-ignore
// function Test(name) {
//     // return 10
//     //@ts-ignore
//     this.name = name
//     return 10
//     // return {test: 'tsfdsd'}
// }
//
// //@ts-ignore
// let result = new Test('evgen')
// console.log(result)
//
//
//
// class Test3 {
//
//     name: string
//     age: number
//     // sayBye: Function
//     // sayHi: () => void // Function
//
//     constructor(name: string, age: number, public city: string) {
//         this.name = name
//         this.age = age
//         this.city = city
//         // this.sayBye = () => {}
//     }
//
//     sayHi() {
//
//     }
//
//     sayBye = () => {
//
//     }
// }
//
// let testObj = new Test3('testObj', 2, 'minsk')
// let testObj2 = new Test3('testObj 2', 4, 'moscow')
//
//
// console.log(testObj)
// console.log(testObj2)
// // console.log(testObj.sayHi === testObj2.sayHi)
// console.log(testObj.sayBye === testObj2.sayBye)
//


// class Test {
//     constructor(public name: string) {
//         this.name = name
//     }
//
//     sayHi() {
//
//     }
// }
//
// class Test2 extends Test {
//      constructor(public name: string) {
//          super(name);
//      }
//
//      sayBye() {
//          console.log('hi hi')
//          super.sayHi()
//      }
// }
//
// let testObj = new Test2('evgen')
// console.log(testObj)


interface ITest {
    age: number
    sayBye: Function
}

class Test implements ITest{
    name: string
    staticParam: number

    static staticParam = 10

    constructor(name: string, public age: number) {
        this.name = name
        this.age = age
        this.staticParam = 500

    }
    sayHi() {
        console.log('hi from parent')
        console.log(this.name)
        console.log(Test.staticParam )
        console.log(this.staticParam)
    }
    sayBye() {

    }
    static TestMethod() {
        console.log(this.staticParam)
    }
}

let obj = new Test('raz', 1)

class Test2 extends Test {
    constructor(public name: string, public age: number) {
        super(name, age);
    }

}

console.dir(Test2)

obj.sayHi ()
// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};