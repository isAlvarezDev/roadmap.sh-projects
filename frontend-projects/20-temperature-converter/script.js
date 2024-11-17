const inputTemperature = document.querySelector(".input-temperature")
let currentTemperature
const section = document.querySelector('.section')
const selectFromUnit = document.getElementById("from-unit")
const selectToUnit = document.getElementById("to-unit")
const buttonConverter = document.querySelector(".btn-convert")
buttonConverter.disabled = true
const paragraphResult = document.createElement("p")

function areAllFieldsFilledIn() {
    if(inputTemperature.value !== "" && selectFromUnit.selectedIndex !== 0 && selectToUnit.selectedIndex !== 0) buttonConverter.disabled = false
    else buttonConverter.disabled = true
}

inputTemperature.addEventListener("input", event => {
    currentTemperature = +event.target.value
    areAllFieldsFilledIn()
})
selectFromUnit.addEventListener("input", areAllFieldsFilledIn)
selectToUnit.addEventListener("input", areAllFieldsFilledIn)

function calculateTemperature(fromUnit, toUnit) {
    let result
    if(fromUnit === "Fahrenheit" && toUnit === "Celseus") {
        result = (currentTemperature - 32) * 5/9
    } else if(fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        result = (currentTemperature - 32) * 5/9 + 273.15
    } else if(fromUnit === "Celseus" && toUnit === "Fahrenheit") {
        result = (currentTemperature * 9/5) + 32
    } else if(fromUnit === "Celseus" && toUnit === "Kelvin") {
        result = currentTemperature + 273.15
    } else if(fromUnit === "Kelvin" && toUnit === "Celseus") {
        result = currentTemperature - 273.15
    } else if(fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        result = (currentTemperature - 273.15) * 9/5 + 32
    } else {
        result = currentTemperature
    }
    return result.toFixed(2)
}

function showAnswer(result) {
    paragraphResult.textContent = `${currentTemperature} ${selectFromUnit.value} is ${result} ${selectToUnit.value}`
    paragraphResult.className = "temperature-result"
    section.insertAdjacentElement("beforeend", paragraphResult)
}

buttonConverter.addEventListener("click", () => {
    showAnswer(calculateTemperature(selectFromUnit.value, selectToUnit.value))
})