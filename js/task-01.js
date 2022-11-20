const listRef = document.querySelector("#categories");
const showNumberOfCategories = () =>
    `Number of categories: ${listRef.children.length}`;
const showCategoriesInfo = () => {
    for (const child of listRef.children) {
        console.log(`Category: ${child.firstElementChild.textContent}`);
        console.log(`Elements: ${child.lastElementChild.children.length}`);
    }
};
console.log(showNumberOfCategories());
console.log(showCategoriesInfo());
