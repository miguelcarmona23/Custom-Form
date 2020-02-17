document.querySelector("#show-password").addEventListener("input", function() {
    document.querySelector("#password").type = this.checked ? "text" : "password";
    document.querySelector(".eyes").className = `eyes ${this.checked && " closed"}`;
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

    if (password.value.length < 8) {
        errorMessage = "Password is mandatory";
        password.parentNode.classList.add("state-error");
        password.focus();
    } else if (username.value.length < 5) {
        errorMessage = "Username is too short (min 5 chars)";
        username.parentNode.classList.add("state-error");
        username.focus();
    }

    if (errorMessage != "") {
        error.textContent = errorMessage;
        e.preventDefault();
    }

    e.preventDefault();
});

function removeError(e) {
    e.target.parentNode.classList.remove("state-error");
    document.querySelector("#error-message").textContent = "";
}

function checkStatus(e) {
    removeError(e);
    const invalidFields = document.querySelectorAll("input:invalid").length;
    document.querySelector(".mouth").className = `mouth errors-${invalidFields}`;
}
document.querySelector("#password").addEventListener("input", checkStatus);
document.querySelector("#username").addEventListener("input", checkStatus);

function moveEyes(e) {
    const eyes = document.querySelector(".eyes");
    const length = e.target.value.length;
    eyes.style.transform = `translate(calc(-50% + ${Math.min(length/2 - 7, 7)}px), calc(-50% + 0.1875rem))`;
    // eyes.style.marginTop = "0.25rem";
    // eyes.style.marginLeft = `${Math.min(length/2 - 7, 7)}px`;
}
document.querySelector("#username").addEventListener("focus", moveEyes);
document.querySelector("#username").addEventListener("input", moveEyes);
document.querySelector("#username").addEventListener("blur", function() {
    document.querySelector(".eyes").style.transform = "translate(-50%, -50%)";
});