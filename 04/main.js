const todoListID1 = 'r24g'
const todoListID2 = 'd57l'

const todoLists = [
    {
        id: todoListID1,
        title: 'What to buy'
    },
    {
        id: todoListID2,
        title: 'What to buy'
    }
]

const task =
    {
        id: 2,
        name: 'CSS',
        isDone: true
    }

console.log(task['id']) //
console.log(task.id) // dot notation


// Невалидный идентификатор

const task2 =
    {
        '1id': 2,
        'task name': 'CSS',
        isDone: true
    }

console.log(task2['task name'])
console.log(task2['1id'])



// имя переменной как свойство

const propName = 'status'

const task3 = {
    [propName]: 'Dima', // 'status'

}

console.log(task3[propName])


const tasks = {
    [todoListID1]: [
        {name: 'Cat', isDone: true},
        {name: 'Dog', isDone: false},
        {name: 'Pet', isDone: true},
    ],
    [todoListID2]: [
        {name: 'JS', isDone: true},
        {name: 'CSS', isDone: false},
        {name: 'React', isDone: true},
    ]
}

console.log(tasks[todoListID1][0].name)


let friednds = {
    '0': 'Alex',
    1: 'Bob',
    2: 'Nick'
}

console.log(friednds[0])


// reduce
const arr = [23, 45, 67, 89, 12]
const maxArr = arr.reduce((acc, el) => acc + el, 0)
console.log(maxArr)


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

const totalScores = students.reduce((acc, st) => acc + st.scores, 0)


const raz = students.reduce((acc, st) => st.name === 'raz' ? st : acc, null)
console.log(raz)


const bestStudents = students.reduce((acc, st) => {
    if(st.scores >= 100) {
        acc.push(st)
    }
    return acc
}, [])


const addScoresSt = students.reduce((acc, st) => {
    acc.push({st, scores: st.scores + 10})
    return acc
}, [])
console.log(addScoresSt)