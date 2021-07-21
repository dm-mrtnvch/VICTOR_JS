const student = {
    name: 'bob',
    age: 23
}

const secStudent = {...student}
console.log(secStudent === student) // false

let arr = [1, 2, 3]
let copyArr = [...arr]
console.log(copyArr == arr) // false

let students = [
    {
        name: 'raz',
        age: 15,
        isMarried: false,
        scores: 15
    },
    {
        name: 'dva',
        age: 21,
        isMarried: false,
        scores: 20
    },
    {
        name: 'tri',
        age: 25,
        isMarried: true,
        scores: 25
    },
    {
        name: 'nol',
        age: 33,
        isMarried: false,
        scores: 30
    }
]


// MAP - исходный массив, функция-преобразователь (callback)


function itMap(array, mapFn) {
    let mappedArray = []
    for (let i = 0; i < array.length; i++) {
        mappedArray[i] = mapFn(array[i])
    }
    return mappedArray
}

function plusOneYear(st) {
    let oldSt = {...st}
    oldSt.age = oldSt.age + 1
    return oldSt
}

// const oldStudents = itMap(students, plusOneYear)
// const oldStudents = students.map(plusOneYear)
// const oldStudents = students.map(st => st.age + 1) - получим массив чисел

const oldStudents = students.map(st => ({...st, age: st.age + 1}))
// {...st,
//     age: st.age + 1
// }

console.log(oldStudents)
console.log(students === oldStudents) // false



// FILTER - исходный массив, функция-фильтровщик (callback)


function itFilter(array, filterFn) {
    let filteredArray = []
    for (let i = 0; i < array.length; i++) {
        if (filterFn(array[i]) === true) {
            filteredArray.push(array[i])
        }
    }
    return filteredArray
}

// const badStudetns = itFilter(students, st => st.scores < 25)
const badStudetns = students.filter(st => st.scores < 25)
console.log(badStudetns)



// FIND - исходный массив, функция-сыщик (callback)


function itFind(array, findFn) {
    for(let i = 0; i < array.length; i++) {
        if(findFn(array[i]) === true) {
            return array[i]
        }
    }
}

function findNikc(st) {
    if(st.name === 'nick') {
        return true
    }

}

// const nick = itFind(students, itFind())
const nick = students.find(st => st.name === 'nick')

promise = {
    state: "pending",
    then: (callback) => {
       this.next = new callback;
       return {...this, callback};
    },
}