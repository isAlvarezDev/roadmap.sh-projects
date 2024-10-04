const passwordInput = document.querySelectorAll(".form__input--password");

passwordInput.forEach(input => {
    input.addEventListener("focusin", () => input.setAttribute("type", "text"))
    input.addEventListener("focusout", () => input.setAttribute("type", "password"))
});