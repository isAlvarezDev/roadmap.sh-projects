const inputValue = document.querySelector(".input-value")
const enterImg = document.querySelector(".enter-img")
const taskContainer = document.querySelector(".task")
let trashSvg = `
<svg fill="inherit" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 485 485" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <rect x="67.224" width="350.535" height="71.81"></rect> <path d="M417.776,92.829H67.237V485h350.537V92.829H417.776z M165.402,431.447h-28.362V146.383h28.362V431.447z M256.689,431.447 h-28.363V146.383h28.363V431.447z M347.97,431.447h-28.361V146.383h28.361V431.447z"></path> </g> </g> </g></svg>
`
let srcEnterImg

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    srcEnterImg = "img/white-enter.png"
    enterImg.src = srcEnterImg
    enterImg.addEventListener("mouseover", () => enterImg.src = "img/light-gray-enter.png")
    enterImg.addEventListener("mouseleave", () => enterImg.setAttribute("src", srcEnterImg))
} else {
    srcEnterImg = "img/black-enter.png"
    enterImg.setAttribute("src", srcEnterImg)

    enterImg.addEventListener("mouseover", () => {
        enterImg.setAttribute("src", "img/dark-gray-enter.png")
    })
    enterImg.addEventListener("mouseleave", () => enterImg.setAttribute("src", srcEnterImg))
}

const addTask = (text) => {
    const taskItemDiv = document.createElement("div")
    taskItemDiv.className = "task-item"
    const checkButton = document.createElement("input")
    checkButton.setAttribute("type", "checkbox")
    checkButton.className = "task__checkbox"
    const p = document.createElement("p")
    p.textContent = text
    taskItemDiv.appendChild(checkButton)
    taskItemDiv.appendChild(p)
    let parser = new DOMParser()
    let doc = parser.parseFromString(trashSvg, "image/svg+xml")
    taskItemDiv.appendChild(doc.documentElement)
    return taskItemDiv
}

const markTask = () => {
    for(let index = 0; index < taskContainer.children.length; index++) {
        const childElement = taskContainer.children[index]
        const firstChild = childElement.firstElementChild

        if(childElement && firstChild) {
            firstChild.addEventListener("change", e => {
                if(e.target.checked) childElement.childNodes[1].classList.add("line-through")
                else childElement.childNodes[1].classList.remove("line-through")
            })
        }
    }
}

const deleteTask = () => {
    for(let index = 0; index < taskContainer.children.length; index++) {
        const childElement = taskContainer.children[index]
        const lastChild = childElement.lastElementChild

        if (childElement && lastChild) {
            lastChild.addEventListener("click", (e) => {
            childElement.remove();
            });
        }
    }
}

const updateTask = () => {
    let insertNewTask = addTask(inputValue.value)
    inputValue.value = null
    taskContainer.insertAdjacentElement("beforeend", insertNewTask)
    markTask()
    deleteTask()
}

enterImg.addEventListener("click", updateTask)
inputValue.addEventListener("keydown", e => e.key === "Enter" ? updateTask() : null)