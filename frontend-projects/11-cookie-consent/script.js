const button = document.querySelector(".modal__button")
const bgModal = document.querySelector(".bg-modal")
const modalCancel = document.querySelector(".modal__cancel")

if(document.cookie !== "canCookies=true") {
    button.addEventListener("click", () => {
        document.cookie = "canCookies=true"
        bgModal.style.display = "none"
        alert("Enjoy your cookies!")
    })
    modalCancel.addEventListener("click", () => bgModal.style.display = "none")
} 
else bgModal.style.display = "none"