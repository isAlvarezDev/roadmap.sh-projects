const popupContainer = document.querySelector(".popup-container")
const svgButton = document.querySelector(".svg-button")
const popupSubreddit = document.querySelector(".popup-subreddit")
const popupInput = document.querySelector(".popup-input")
const popupButton = document.querySelector(".popup-button")
const redditSection = document.querySelector(".reddit-section")
const redditConfigSvg = document.querySelector(".reddit-config")
const redditContent = document.querySelector(".reddit-content")
const refreshOption = document.querySelector(".nav-item-refresh")
const deleteOption = document.querySelector(".nav-item-delete")
const errorMessageSection = document.querySelector(".error-message")
const wheelContainer = document.querySelector(".wheel-container")
wheelContainer.classList.add("wheel-container-hidden")
svgButton.addEventListener("click", appearPopup)

if(localStorage.length !== 0) {
    document.body.style.height = "max-content"
    popupContainer.style.display = "none"
    redditSection.classList.remove("reddit-section-hidden")
    createSubredditBar()
    createSubredditLane()
    wheelContainer.classList.add("wheel-container-hidden")
}

function appearPopup() {
    popupSubreddit.classList.remove("popup-subreddit-hidden")
}

popupButton.addEventListener("click", displaySubredditLanes)

async function displaySubredditLanes() {
    document.body.style.height = "max-content"
    popupContainer.style.display = "none"
    errorMessageSection.classList.add("error-message-hidden")
    const response = await createRedditApi()
    createSubreddit(false, response)
}

async function createRedditApi() {
    wheelContainer.classList.remove("wheel-container-hidden")
    try {
        redditSection.classList.remove("reddit-section-hidden")
        const axiosInstace = axios.create({
            baseURL: "https://www.reddit.com/"
        })
        const resPost = await axiosInstace.get(`r/${popupInput.value}/new.json`)
        return resPost.data.data.children
    } catch (error) {
        document.body.style.height = "80dvh"
        createSubreddit(true, null)
        showErrorMessage(error)
        window.localStorage.clear()
    } finally {
        wheelContainer.classList.add("wheel-container-hidden")
    }
}

function createSubreddit(hasError, response) {
    if(hasError) {
        createSubredditBar()
    } else {
        createSubredditLocalStorage(response)
        createSubredditBar()
        createSubredditLane()
    }
}

function createSubredditBar() {
    const redditSpan = document.querySelector(".reddit-span")
    redditSpan.textContent = localStorage.getItem("subredditNamePrefixed")
}

function createSubredditLocalStorage(response) {
    let redditPostsData = []
    let titles = [], authors = [], voteCounts = []
    let subredditNamePrefixed

    if(response !== null) {
        for(let object = 0; object <= 4; object++) {
            redditPostsData.push(response[object])
        }
    }
    for(object of redditPostsData) {
        subredditNamePrefixed = object.data.subreddit_name_prefixed
        titles.push(object.data.title)
        authors.push(object.data.author)
        voteCounts.push(object.data.ups)
    }
    window.localStorage.setItem("subredditNamePrefixed", subredditNamePrefixed)
    window.localStorage.setItem("titles", JSON.stringify(titles))
    window.localStorage.setItem("authors", JSON.stringify(authors))
    window.localStorage.setItem("voteCounts", JSON.stringify(voteCounts))
}

function createSubredditLane() {
    redditContent.classList.remove("reddit-content-hidden")
    for(let index=0; index<=4; index++) {
        const div = document.createElement("div")
        div.className = "reddit-lane"
        const author = document.createElement("span")
        const title = document.createElement("p")
        title.className = "reddit-title"
        const voteCount = document.createElement("span")
        author.textContent = JSON.parse(window.localStorage.getItem("authors"))[index]
        title.textContent = JSON.parse(window.localStorage.getItem("titles"))[index]
        voteCount.textContent = JSON.parse(window.localStorage.getItem("voteCounts"))[index]
        div.appendChild(author)
        div.appendChild(title)
        div.appendChild(voteCount)
        redditContent.append(div)
    }
}

function showErrorMessage(error) {
    const pValue = document.querySelector(".error-mesage-p")
    pValue.textContent = error + ". Reload the page"
    errorMessageSection.classList.remove("error-message-hidden")
}


redditConfigSvg.addEventListener("click", showDropdown)

function showDropdown() {
    const dropdownMenu = document.querySelector(".reddit-dropdown")
    dropdownMenu.classList.toggle("reddit-dropdown-hidden")
}

refreshOption.addEventListener("click", refreshRedditInfo)

function refreshRedditInfo() {
    removeSubredditLanes()
    displaySubredditLanes()
}

deleteOption.addEventListener("click", deleteRedditInfo)

function deleteRedditInfo() {
    removeSubredditLanes()
    window.localStorage.clear()
    redditContent.classList.add("reddit-content-hidden")
    redditSection.classList.add("reddit-section-hidden")
    popupContainer.attributes.removeNamedItem("style")
    document.body.attributes.removeNamedItem("style")
    showDropdown()
}

function removeSubredditLanes() {
    while (redditContent.firstChild) {
        redditContent.removeChild(redditContent.firstChild)
    }
}