const loginFormRef = document.querySelector(".login-form");
loginFormRef.addEventListener("submit", checkLoginFormSubmit);
function checkLoginFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    const newUser = {
        email: email.value,
        password: password.value,
    };
    console.log(newUser);
    event.currentTarget.reset();
}
