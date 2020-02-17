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