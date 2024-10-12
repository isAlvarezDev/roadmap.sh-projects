const details = document.querySelectorAll("details")

details.forEach(detail => {
    detail.addEventListener("click", () => openCloseDetails())
})

function openCloseDetails() {
    details.forEach(detail => {
        let details = detail.parentNode
        if(details != this.parentNode) detail.removeAttribute("open")
    })
}