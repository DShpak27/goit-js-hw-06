const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", (event) => {
    let inputLengthCounter = event.currentTarget.value.length;
    if (Number(validationInput.dataset.length) === inputLengthCounter) {
        if (validationInput.classList.contains("invalid")) {
            validationInput.classList.remove("invalid");
            validationInput.classList.add("valid");
        } else {
            validationInput.classList.add("valid");
        }
    } else {
        if (validationInput.classList.contains("valid")) {
            validationInput.classList.remove("valid");
            validationInput.classList.add("invalid");
        } else {
            validationInput.classList.add("invalid");
        }
    }
});
