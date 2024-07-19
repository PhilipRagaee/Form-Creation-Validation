document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let messages = [];

        if (username.length < 3) messages.push('Username must be at least 3 characters long.');
        if (!email.includes('@') || !email.includes('.')) messages.push('Email must contain @ and .');
        if (password.length < 8) messages.push('Password must be at least 8 characters long.');

        feedbackDiv.style.display = 'block';
        if (messages.length === 0) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});