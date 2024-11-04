const select = document.getElementById("select")
const repositorySection = document.querySelector(".repository")
repositorySection.classList.add("repository-hidden")
const wheelContainer = document.querySelector(".wheel-container")
wheelContainer.classList.add("wheel-container-hidden")
const documentFragment = document.createDocumentFragment()
const repositoryError = document.querySelector(".repository-error")
repositoryError.classList.add("repository-error-hidden")
const retrySearchSection = document.querySelector(".retry-search")

const getProgrammingLanguageApi = async () => {
    const urlResponse = await fetch("https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json")
    const apiResult = await urlResponse.json()
    return apiResult
}

const selectProgrammingLanguage = async () => {
    const api = await getProgrammingLanguageApi()
    for(let index in api) {
        createDropdownElements(api[index].value, api[index].title)
    }
    select.appendChild(documentFragment)
}

const createDropdownElements = (value,title) => {
    const option = document.createElement("option")
    option.value = value
    option.textContent = title
    documentFragment.appendChild(option)
}

selectProgrammingLanguage()

const getGitHubApiRest = language => {
    return axios.get(`https://api.github.com/search/repositories?q=language:${language}`)
}

const returnRandomGithubRepository = async api => {
    let totalRepositories = api.data.items.length
    let randomRepository = api.data.items[Math.floor(Math.random() * totalRepositories)]
    return randomRepository
}

const createRepositoryElements = (repository) => {
    const h2 = document.createElement("h2")
    h2.textContent = repository.name
    const description = document.createElement("p")
    description.textContent = repository.description
    const divStats = document.createElement("div")
    divStats.className = "project-stats"
    const circleImg = document.createElement("img")
    circleImg.src = "img/circle-svgrepo-com.svg"
    const language = document.createElement("span")
    language.textContent = repository.language
    const starImg = document.createElement("img")
    starImg.src = "img/star-svgrepo-com.svg"
    const stargazersCount = document.createElement("span")
    stargazersCount.textContent = repository.stargazers_count
    const forkImg = document.createElement("img")
    forkImg.src= "img/git-fork-svgrepo-com.svg"
    const forks = document.createElement("span")
    forks.textContent = repository.forks
    const issueImg = document.createElement("img")
    issueImg.src = "img/exclamation-circle-svgrepo-com.svg"
    const openIssues = document.createElement("span")
    openIssues.textContent = repository.open_issues
    
    documentFragment.appendChild(circleImg)
    documentFragment.appendChild(language)
    documentFragment.appendChild(starImg)
    documentFragment.appendChild(stargazersCount)
    documentFragment.appendChild(forkImg)
    documentFragment.appendChild(forks)
    documentFragment.appendChild(issueImg)
    documentFragment.appendChild(openIssues)

    divStats.appendChild(documentFragment)
    
    const repositoryItem = document.createElement("div")
    repositoryItem.appendChild(h2)
    repositoryItem.appendChild(description)
    repositoryItem.appendChild(divStats)
    
    repositorySection.appendChild(repositoryItem)
}

async function instantiateGithubFunctions(language) {
    const response = await getGitHubApiRest(language)
    const randomRepository = await returnRandomGithubRepository(response)
    return randomRepository
}

const showErrorSection = () => {
    repositorySection.classList.add("repository-hidden")
    repositoryError.classList.remove("repository-error-hidden")
    const errorMessage = document.createElement("p")
    errorMessage.textContent = "Error fetching repositories"
    if(repositoryError.childElementCount >= 1) {
        repositoryError.removeChild(repositoryError.lastElementChild)
        repositoryError.appendChild(errorMessage)
    } else {
        repositoryError.appendChild(errorMessage)
    }
}

const displayRepository = (value, canRetrySearch) => {
    wheelContainer.classList.remove("wheel-container-hidden")
    instantiateGithubFunctions(value)
    .then(repository => {
        repositoryError.classList.add("repository-error-hidden")
        repositorySection.classList.remove("repository-hidden")
        
        if(repositorySection.childElementCount === 1) {
            repositorySection.removeChild(repositorySection.lastElementChild)
            createRepositoryElements(repository)
        } else {
            createRepositoryElements(repository)
            if(canRetrySearch) retrySearch()
        }
    })
    .catch(e => { 
        showErrorSection() 
        if(canRetrySearch) retrySearch()
    }) 
    .finally(() => {
        wheelContainer.classList.add("wheel-container-hidden")
    })
}

const retrySearch = () => {
    const retryButton = document.createElement("button")
    retryButton.className = "retry-button"
    retryButton.textContent = "Refresh" 

    if(retrySearchSection.childElementCount === 1) {
        retrySearchSection.removeChild(retrySearchSection.lastElementChild)
        retrySearchSection.appendChild(retryButton)
    } else {
        retrySearchSection.appendChild(retryButton)
    }
    retryButton.addEventListener("click", () => {
        wheelContainer.classList.remove("wheel-container-hidden")
        displayRepository(select.value, false)
    })
    wheelContainer.classList.add("wheel-container-hidden")
}

select.addEventListener("change", event => {
    displayRepository(event.target.value, true)
})