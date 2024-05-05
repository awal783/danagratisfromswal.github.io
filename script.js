document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // contoh validasi login, Anda dapat mengganti dengan validasi sesuai dengan kebutuhan
  if (username === 'admin' && password === 'admin123') {
    // Redirect ke halaman setelah login berhasil
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('error-msg').innerText = 'Username atau password salah!';
  }
});
