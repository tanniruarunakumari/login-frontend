document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{4,}/;
    if (!passwordPattern.test(password)) {
        alert('Password must contain at least one number, one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long');
        return;
    }
    window.location.href = 'signup_success.html';
});
