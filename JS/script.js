document.querySelector("#show-password").addEventListener("input", function() {
    document.querySelector("#password").type = this.checked ? "text" : "password";
});