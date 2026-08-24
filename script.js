const login = document.querySelector(".login");
const signup = document.querySelector(".signup");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

login.classList.add("active");

showSignup.onclick = function () {
    login.classList.remove("active");
    signup.classList.add("active");
}

showLogin.onclick = function () {
    signup.classList.remove("active");
    login.classList.add("active");
}