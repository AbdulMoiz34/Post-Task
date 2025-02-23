// Create an instance of Notyf
let notyf = new Notyf();
const loginForm = document.getElementById("login-form");
const users = JSON.parse(localStorage.getItem("users")) || [];
let login = localStorage.getItem("login") || false;


// find user by email.
function findUserByEmail(email) {
    return users.find(function (user) {
        return user?.email.toLowerCase() === email.toLowerCase();
    });
}

function loginFormHandler() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = findUserByEmail(email);
    if (!user) {
        notyf.error("User not found");
        return;
    }
    if (password !== user.password) {
        notyf.error("Password is not matched.");
        return;
    }
    notyf.success("Login Succesfull.");
    setTimeout(function () {
        location = `/index.html?email=${email}`;
        login = true;
        localStorage.setItem("login", login);
    }, 1000);
}
if (localStorage.getItem("login") == "true") {
    location = "/";
}
// loginform submit listener
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    loginFormHandler();
});