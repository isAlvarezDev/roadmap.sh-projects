import { DateTime } from "luxon";
import datepicker from 'js-datepicker'

console.log(DateTime.now().year)

const picker = datepicker('#age', {
  formatter: (input, date, instance) => {
    input.value = date.toLocaleDateString('en-US')
  },
  showAllDates: true
})