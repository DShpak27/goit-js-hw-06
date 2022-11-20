const inputFontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
inputFontSizeControlRef.addEventListener("click", () => {
    textRef.style.fontSize = `${inputFontSizeControlRef.value}px`;
});
