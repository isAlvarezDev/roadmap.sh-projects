import { DateTime } from "luxon";
import datepicker from 'js-datepicker'

const input = document.getElementById("age")
const button = document.querySelector("button")
const p = document.querySelector(".message")

const picker = datepicker('#age', {
  formatter: (input, date, instance) => {
    input.value = date.toLocaleDateString('en-US')
  },
  showAllDates: true,
  onSelect: (instance, date) => button.removeAttribute("disabled")
})

function calculateAge() {
  let [birthMonth, birthDay, birthYear] = input.value.split("/").map(toNumber => +toNumber)
  const current = DateTime.now()

  
    if(birthMonth === current.month) {
      if(current.day >= birthDay) setParagraphText(current.year - birthYear, 0)
      else setParagraphText((current.year - birthYear - 1), 12)
    } else if (current.month < birthMonth) {
      setParagraphText((current.year - birthYear - 1), current.month)
    } else {
      setParagraphText(current.year - birthYear, current.month - birthMonth)
    }
}

const setParagraphText = (year, month) => 
  p.textContent = `You are ${year} years ${month} months old`

button.addEventListener("click", calculateAge)