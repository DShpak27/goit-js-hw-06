let conterRef = document.querySelector("#value");
let counterValue = 0;
conterRef.textContent = String(counterValue);
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
decrementBtn.addEventListener("click", () => {
    conterRef.textContent = String((counterValue -= 1));
});
incrementBtn.addEventListener("click", () => {
    conterRef.textContent = String((counterValue += 1));
});
