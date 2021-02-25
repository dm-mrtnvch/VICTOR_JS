import {
    copyStudent,
    div,
    getFullCopyGroup,
    getFullCopyStudent,
    mult,
    StudentGroupType,
    StudentType,
    sum
} from './tasks';


let a: number
let b: number
let student: StudentType
let students: StudentGroupType

beforeEach(() => {
    a = 5
    b = 10

    student = {
        name: 'bob',
        age: 23,
        scores: 100,
        money: 200,
        friends: ['alex', 'nick', 'mike']
    }

    students = [
        {
            name: 'raz',
            age: 21,
            scores: 111,
            money: 1525,
            friends: ['dva', 'tri', 'mike']
        },
        {
            name: 'dva',
            age: 25,
            scores: 153,
            money: 1483,
            friends: ['alex', 'four', 'wall']
        }
    ]
})


test('sum of numbers',() => {
    const result: number = sum(a, b)


    expect(result).toBe(15)
})



test('mult of numbers', () => {
    const result: number = mult(a,b)

    expect(result).toBe(50)
})



test('division of numbers', () => {
    expect(div(a, b)).toBe(2)
})


test('get copy student', () => {
    const copySt = copyStudent(student)
    let result = copySt == student

    expect(result).toBe(false)
    expect(student.name).toBe(copySt.name)

})


test('get full copy student', () => {
    const copySt = getFullCopyStudent(student)
    expect(copySt).not.toBe(student)
    expect(copySt.name).toBe(student.name)
    expect(copySt.friends).not.toBe(student.friends)
    expect(copySt.friends.length).toBe(student.friends.length)
    expect(copySt.friends[0]).toBe(student.friends[0])
})


test('get full copy group', () => {
    const copySts = getFullCopyGroup(students)
    expect(copySts).not.toBe(students)
    expect(copySts[0].name).toBe(students[0].name)
    expect(copySts.length).toBe(students.length)
    expect(copySts[0].friends).not.toBe(students[0].friends)
})