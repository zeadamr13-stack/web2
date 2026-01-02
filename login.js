document.getElementById("loginForm").addEventListener("submit", function (e) {
e.preventDefault();

const user = document.getElementById("username").value;
const pass = document.getElementById("password").value;

if (user === "admin" && pass === "1234") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "home.html";
} else {
    alert("بيانات الدخول غير صحيحة");
}
});

