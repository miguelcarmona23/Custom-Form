document.querySelector("#show-password").addEventListener("input", function() {
    document.querySelector("#password").type = this.checked ? "text" : "password";
});

const labels = document.querySelectorAll("#login-form label input");
for (let x = 0; x < labels.length; x++) {
    labels[x].addEventListener("focus", function() {
        this.parentNode.classList.add("state-focus");
    });

    labels[x].addEventListener("blur", function() {
        this.parentNode.classList.remove("state-focus");
    });
}

document.querySelector(".login-form").addEventListener("submit", function(e) {
    let errorMessage = "";
    const error = document.querySelector("#error-message");
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");

    error.textContent = "";

    // check password length
    if (password.value.length < 8) {
        errorMessage = "Password is mandatory";
        password.parentNode.classList.add("state-error");
        password.focus();
        // check email length
    } else if (username.value.length < 5) {
        errorMessage = "Username is too short (min 5 chars)";
        username.parentNode.classList.add("state-error");
        username.focus();
    }

    if (errorMessage != "") {
        error.textContent = errorMessage;
        e.preventDefault();
    }
});