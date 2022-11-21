const changeColorBtnRef = document.querySelector(".change-color");
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
changeColorBtnRef.addEventListener("click", () => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    document.querySelector(".color").textContent = randomColor;
});
