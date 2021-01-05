const array = [0, 235, 21, 675, 78, 100, 99]

// Bubble sort
for(let j = 0; j < array.length - 1; j++) {
    let isSort  = false
    for(let i = 0; i < array.length - 1 - j; i++) {
        if(array[i] > array[i + 1]) {
            isSort = true
            let temp = array[i + 1]
            array[i + 1] = array[i]
            array[i] = temp
        }
    }
    if(isSort === false) {
        break
    }
}

console.log(array)




let friends = ['Bob', 'Alex', 'Nick', 'John', '10']
let sort = friends.sort()
console.log(sort)

let numbers = [1000, 199, 20, 399, 0, 666]

function sortIncrease(a, b) {
    if (i <= b) {
        return -1
    } else {
        return 1
    }
}

console.log(numbers.sort((a, b) => a - b))




let students = [
    {
        name: 'raz',
        age: 23,
        isMarried: true,
        scores: 20
    },
    {
        name: 'dva',
        age: 33,
        isMarried: true,
        scores: 40
    },
    {
        name: 'tri',
        age: 43,
        isMarried: true,
        scores: 60
    },
    {
        name: 'one',
        age: 53,
        isMarried: true,
        scores: 80
    },
]

students.sort((a, b) => a.age - b.age)
console.log(students)

function sortByName(a, b) {
    switch (a.name > b.name) {
        case true:
            return 1
        case false:
            return -1
        default:
            return 0
    }
}

console.log(students.sort(sortByName))