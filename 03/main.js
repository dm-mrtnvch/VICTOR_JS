// Событие - event
// Генерация события со сведениями о произошедшем событии -> event & e -> {....}
// е - со стандартной структурой, присущей каждому типу события
// Функция -> обработчик, handler, слушатель, listener, подписчик, subscriber, callback, ФОВ
// Функция вызывается с параметром 'e'

let arr = []
const cbFn = () => {}
console.log(arr.map(() => {}))

const small = document.getElementById('small')
const medium = document.getElementById('medium')
const big = document.getElementById('big')
const btn = document.getElementById('btn')


function onClickHandler(e) {
    debugger
    if(e.target.id === 'btn1') {
        alert(e.target.message)
    } else if (e.target.id === 'btn2') {
        console.dir(e.target.name)
    }
}

btn.onclick = onClickHandler
// small.onclick = onClickHandler
// medium.onclick = onClickHandler
// big.onclick = onClickHandler

// e.currentTarget -> элемент, который вызвал коллбэк (обрабочтик)
// e.target -> элемент, который сгенерировал событие (первый получил клик)
// Иногда e.currentTarget === e.target