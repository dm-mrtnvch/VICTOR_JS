import {div, mult, sum} from './tasks';

let a: number
let b: number

beforeEach(() => {
    a = 5
    b = 10
})


test('sum of numbers', () => {
    const result: number = sum(a, b)
    expect(result).toBe(15)
})


test('div of numbers', () => {
    const result = div(b, a)
    expect(result).toBe(2)
})


test('mult of number', () => {
    const result: number = mult(a, b)
    expect(result).toBe(50)
})