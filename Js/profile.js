document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const profileMenu = document.getElementById('profile-menu');
    const loginMenu = document.getElementById('login-menu');
    const profileUsername = document.getElementById('profile-username');

    // Check if user is logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
        // Show profile menu and hide login menu
        loginMenu.classList.add('hidden');
        profileMenu.classList.add('show');
        profileUsername.textContent = loggedInUser;
    } else {
        // Show login menu and hide profile menu
        loginMenu.classList.remove('hidden');
        profileMenu.classList.remove('show');
    }

    // Function to handle login form submission
    function validateLoginForm() {
        const username = loginForm.querySelector('#username').value.trim();
        const password = loginForm.querySelector('#password').value.trim();

        // Fetch stored username and password
        const storedUsername = localStorage.getItem('registeredUsername');
        const storedPassword = localStorage.getItem('registeredPassword');

        if (username === storedUsername && password === storedPassword) {
            // Save logged in user to localStorage
            localStorage.setItem('loggedInUser', username);

            // Redirect to home page
            window.location.href = 'index.html';
        } else {
            alert('Username or password is incorrect.');
        }
    }

    // Event listener for login form
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validateLoginForm();
    });

    // Function to handle logout
    window.handleLogout = function () {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'login.html'; // Redirect to login page
    }
});
