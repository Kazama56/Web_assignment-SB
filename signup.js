document.getElementById('show-login').addEventListener('click', function () {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
});

document.getElementById('show-register').addEventListener('click', function () {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
});

document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Handle registration logic here (e.g., send data to the server)
    alert('Registration successful!');
});

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Handle login logic here (e.g., send data to the server)
    alert('Login successful!');
});
