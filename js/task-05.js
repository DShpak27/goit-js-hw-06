const nameInputRef = document.querySelector("#name-input");
nameInputRef.addEventListener("input", () => {
    document.querySelector("#name-output").textContent =
        nameInputRef.value === "" ? "Anonymous" : nameInputRef.value;
});
