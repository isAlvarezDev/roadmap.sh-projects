const textArea = document.querySelector("textarea")
const p = document.querySelector("p")

textArea.addEventListener("input", (e) => {
    p.textContent = `${e.target.textLength}/250`
    e.target.textLength == 250 
    ? (
        textArea.classList.add("restringed-textarea"),
        p.classList.add("restringed-p")
    ) 
    : (
        textArea.classList.remove("restringed-textarea"),
        p.classList.remove("restringed-p")
    )
})