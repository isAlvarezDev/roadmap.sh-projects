const listItems = document.querySelectorAll(".main__li")
const content = document.querySelector(".main__content")
const p = document.querySelector(".main__p")
const h1 = document.querySelector("h1")

const removeBorder = listItems => {
    listItems.forEach(listItem => listItem.style.borderBottom = "transparent")
}

const changeDescription = li => {
    if(li.textContent === "Berlin") {
        h1.textContent = "Berlin"
        p.textContent = "Berlin, Germany’s capital"
    }
    else if (li.textContent === "Rome") {
        h1.textContent = "Rome"
        p.textContent = "Rome is the capital city of Italy"
    }
    else if (li.textContent === "Madrid") {
        h1.textContent = "Madrid"
        p.textContent = "Madrid, Spain's central capital"
    }
    else {
        h1.textContent = "Amsterdam"
        p.textContent = "Amsterdam is the Netherlands’ capital"
    }
    li.style.borderBottom = "3px solid #48b"
}

listItems.forEach(li => {
    li.addEventListener("click", (e)=> {
        removeBorder(listItems)
        changeDescription(li)
    })
})