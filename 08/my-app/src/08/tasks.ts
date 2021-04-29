export function sum(...numbers: Array<number>){
    return numbers.reduce((acc, item) => acc + item )
}

export function checkType(a: any, b: any, ...items: Array<number>){
    return items.length
    // Array.isArray(items)
}

export function getTriangleType(a: number, b: number, c: number): string {
        if(a >= b + c || b >= a + c || c >= a + b){
            return '00'
        } else if(a === b && b === c) {
            return '10'
        } else if(a === b || b === c || a === c){
            return '01'
        } else {
            return '11'
        }
}

export function isEvenSumNumber(numbers: Array<number>): boolean {
    let odd = 0
    let even = 0
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            even += numbers[i]
        } else {
            odd += numbers[i]
        }
    }
    return even > odd
}

export function isEvenSumNumber1(numbers: Array<number>): boolean {
    let even =  numbers.reduce((sum, num, index) => index % 2 === 0 ? sum + num : sum, 0)
    let odd =  numbers.reduce((sum, num, index) => index % 2 !== 0 ? sum + num : sum, 0)
    return even > odd
}

export function getSum(num: number) {
    return String(num)
        .split('')
        .map(Number)
        .reduce((sum, eachNumber) => sum + eachNumber, 1 )
}

export function getBanknotesList(num: number): Array<number> {
    num % 10
    return [num]
}