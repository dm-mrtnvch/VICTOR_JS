import {checkType, getBanknotesList, getSum, getTriangleType, isEvenSumNumber, isEvenSumNumber1, sum} from './tasks'

test('sum of numbers', () => {
    expect(sum(1,2,3,4,5)).toBe(15)
    expect(sum(1,2,3)).toBe(6)
    expect(sum(1)).toBe(1)
})

test('get type of numbers', () => {
    // expect(checkType(1,2,3,4,5)).toBe(true)
    expect(checkType(1,2,3,4,5)).toBe(3)
})

test('get triangle type', () => {
    expect(getTriangleType(3,3,3)).toBe('10')
    expect(getTriangleType(3,2,3)).toBe('01')
    expect(getTriangleType(3,4,5)).toBe('11')
    expect(getTriangleType(10,4,5)).toBe('00')
})

test('is even sum number', () => {

    expect(isEvenSumNumber([1, 2, 3, 4, 5])).toBe(false)
    expect(isEvenSumNumber([100, 2, 300, 4, 500])).toBe(true)
})

test('is even sum number 1', () => {

    expect(isEvenSumNumber1([1, 2, 3, 4, 5])).toBe(false)
    expect(isEvenSumNumber1([100, 2, 300, 4, 500])).toBe(true)
})

test('get sum of all number', () => {

    expect(getSum(3524)).toBe(14)
    expect(getSum(34325235)).toBe(27)
})


test('get banknotes list', () => {
    const result1500 = getBanknotesList(1500)
    const result23 = getBanknotesList(23)
    expect(result1500[0]).toBe(1000)
    expect(result1500[1]).toBe(500)
    expect(result23[1]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)
})