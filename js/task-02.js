const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];
const putItemsForIngrediensRef = (ingredients) => {
    const ingredientItemsRef = ingredients.map((element) => {
        const item = document.createElement("li");
        item.textContent = element;
        item.classList.add("item");
        return item;
    });
    document.querySelector("#ingredients").append(...ingredientItemsRef);
};
putItemsForIngrediensRef(ingredients);
