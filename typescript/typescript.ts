// let a: number = 10
// let b: string = 'hello'
// let c: boolean = false
//
//
// let ages: Array<number | string | boolean> = [true, 34, 'dva']
// let ages1: (number | string | boolean)[] = [false, 2, 'tri']



interface IMan {
    name: string
    height: number
}
interface IСar {
    model: string
    year: number
}


// let man1: IMan = {name: 'raz', height: 182}
// let man2: IMan = {height: 13.3, name: 'dva'}
// let car: IСar = {model: 'jiguli', year: 1994}

type ManType = {
    name: string
    height: number
    surname?: string
}
type CarType = {
    model: string
    year: number
}

let man1: ManType = {name: 'raz', height: 182}
let man2: ManType = {height: 13.3, name: 'dva'}
let car: CarType = {model: 'jiguli', year: 1994}
type PeopleType = ManType |  CarType

let people: Array<ManType> = [man1, man2]
let people2: Array<PeopleType> = [
    {name: 'raz', height: 182, surname: 'safronov'},
    {height: 13.3, name: 'dva'},
    {model: 'jiguli', year: 1994}
]

function sum(a: number, b: number): number {
    let c = a + b
    return c
}

function toUpperCase(strings: Array<string>): Array<string> {
    let result = strings.map(s => s.toUpperCase())
    return result
}

let createMan = (name: string, height: number): ManType => {
    return {
        name,
        height
    }
}


type CarType2 = {
    model: string
    year: number
    on: boolean
    turnOn: () => void
    rename: (model: string) => string
}

let car2: CarType2 = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
        this.on = true
    },
    rename(model) {
        this.model = model
        return this.model
    }
}


type CreateGarageType = {
    addCar: (car: CarType2) => void
    logAllCarsNames: () => void
    getAllcars: () => Array<CarType2>
}

let createGarage = (): CreateGarageType => {
    let _cars: Array<CarType2> = []

    return {
        addCar(car) {
            _cars.push(car)
        },
        logAllCarsNames() {
            console.log('Cars in the garage')
            _cars.forEach(c => console.log(c.model))
        },
        getAllcars() {
            return _cars
        }

    }
}