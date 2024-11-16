const textArea = document.querySelector("textarea")
const p = document.querySelector("p")

textArea.addEventListener("input", event => {
    p.textContent = `${event.target.textLength}/250`
    event.target.textLength == 250 
    ? (
        textArea.classList.add("restringed-textarea"),
        p.classList.add("restringed-p")
    ) 
    : (
        textArea.classList.remove("restringed-textarea"),
        p.classList.remove("restringed-p")
    )
})