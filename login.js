// document.getElementById("loginForm").addEventListener("submit", function (e) {
// e.preventDefault();

// const user = document.getElementById("username").value;
// const pass = document.getElementById("password").value;

// if (user === "admin" && pass === "1234") {
//     localStorage.setItem("isLoggedIn", "true");
//     window.location.href = "index.html";
// } else {
//     alert("بيانات الدخول غير صحيحة");
// }
// });


document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // يمنع الريفريش

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // التحقق من الحقول الفاضية
    if (email === '' || password === '') {
      alert('الرجاء إدخال اسم المستخدم وكلمة المرور');
      return; // يمنع تنفيذ باقي الكود
    }

    // البيانات اللي متخزنة
    const savedUser = localStorage.getItem('email');
    const savedPass = localStorage.getItem('password');

    if (email === savedUser && password === savedPass) {
      alert('تم تسجيل الدخول بنجاح');
      window.location.href = 'home.html'; // الصفحة اللي بعد اللوجين
    } else {
      alert('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
  });

});

