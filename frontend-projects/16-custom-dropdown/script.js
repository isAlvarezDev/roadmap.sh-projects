const input = document.querySelector("input")
const svg = document.querySelector("svg")
const dropdown = document.querySelector(".close-state")
const itemValues = document.querySelectorAll(".input-value")

input.addEventListener("click",e => {
    dropdown.classList.add("open-state-visible")
    svg.setAttribute("transform", "rotate(180)")
    selectItem()
})

const selectItem = () => {
    itemValues.forEach(item => {
        item.addEventListener("click", (e) => {
            setTimeout(() => input.value = e.target.textContent, 130)
            dropdown.classList.remove("open-state-visible")
            svg.removeAttribute("transform")
        })
    })
}