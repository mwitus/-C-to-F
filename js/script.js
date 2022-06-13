const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let fahrenheit
let celsius

const swap = () => {
	if (one.innerHTML === '°C') {
		one.innerHTML = '°F'
		two.innerHTML = '°C'
        result.innerHTML = ''
	} else {
		one.innerHTML = '°C'
		two.innerHTML = '°F'
        result.innerHTML = ''
	}
}

const changeFar = () => {
    fahrenheit = converter.value * 1.8 + 32
    result.innerHTML = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`
    converter.value = ''
}

const changeC = () => {
    celsius = (converter.value - 32) / 1.8
    result.innerHTML = `${converter.value}°F to ${celsius.toFixed(1)}°C`
    converter.value = ''
}

const conversion = () => {
    if(converter.value !== '') {
        if(one.innerHTML === '°C') {
            changeFar()
        } else {
            changeC()
        }
    } else {
        result.innerHTML = 'Musisz podać jakąś wartość!'
    }
}

const reset = () => {
    converter.value = ''
    result.innerHTML = ''
}


changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)
