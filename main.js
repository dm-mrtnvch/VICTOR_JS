// 1.примитивы(числа, строки, булевы, null, NaN, un...
// .объекты (объекты, массивы, функции)
// - сложность (вложенность)
// - имеет свойства и методы
// - ссылочный тип данных
//
// let student = {
//     name: 'Alex',
//     age: 23,
//     friends: ['bob', 'helen', 'john'] // #345
// }
//
// let friends = ['bob', 'helen', 'john']
//
// let student2 = student
// student2.name = 'Bob'
// // console.log(student === student2) - true
//
//
// // поверхностное копирование (клонирование)
//
// let copyStudent = {...student, name: 'bob', lastName: 'bobich'}
// let copyFriends = [...friends]
// // console.log(student === copyStudent) - false
//
//
// // 2.
//
// function useState(param) {
//     let a = param
//     let b = () => {
//         console.log(a)
//     }
//     return [a, b]
//
// }
// //
// // let [value, heyFn] = useState('hey')
//
// // let result = useState('hey')
// // console.log(result)
//
// let value = result[0] // 'hey'
// let heyFN = result[1] //


// map - преобразовывать массив в другой массив.. похожий


const students = [
    {
        name: 'nol',
        age: 23,
        isMarried: true,
        scores: 10
    },
    {
        name: 'raz',
        age: 23,
        isMarried: false,
        scores: 20
    },
    {
        name: 'dva',
        age: 23,
        isMarried: true,
        scores: 30
    },
    {
        name: 'tri',
        age: 23,
        isMarried: false,
        scores: 40
    },
]


const names = students.map(st => st.name)
console.log(names)



console.log(trueStudents)