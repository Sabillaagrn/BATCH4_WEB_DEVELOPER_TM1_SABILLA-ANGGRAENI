document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const registrationCard = document.getElementById('registration-card');
    const registeredUsername = document.getElementById('registered-username');
    const registeredEmail = document.getElementById('registered-email');
    const registeredPassword = document.getElementById('registered-password');

    let storedUsername = ''; // Variabel untuk menyimpan username yang didaftarkan
    let storedPassword = ''; // Variabel untuk menyimpan password yang didaftarkan

    // Function to validate register form
    function validateRegisterForm() {
        const username = registerForm.querySelector('#username-register').value.trim();
        const email = registerForm.querySelector('#email').value.trim();
        const password = registerForm.querySelector('#password-register').value.trim();

        if (username === '' || email === '' || password === '') {
            alert('Please fill in all fields.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // Simpan data username dan password yang didaftarkan
        storedUsername = username;
        storedPassword = password;

        // Display registration info card
        displayRegistrationCard(username, email, password);
        return false; // Prevent form submission
    }

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Display registration information card
    function displayRegistrationCard(username, email, password) {
        registeredUsername.textContent = username;
        registeredEmail.textContent = email;
        registeredPassword.textContent = password; // Menampilkan password di card
        registrationCard.classList.remove('hidden');
    }

    // Close card function
    window.closeCard = function () {
        registrationCard.classList.add('hidden');
    };

    // Attach event listener to register form
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        validateRegisterForm();
    });

    // Validate login form
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        const username = loginForm.querySelector('#username').value.trim();
        const password = loginForm.querySelector('#password').value.trim();

        // Cek apakah username dan password sesuai dengan data yang didaftarkan
        if (username === storedUsername && password === storedPassword) {
            alert('Login successful!');
            // Arahkan pengguna ke home page setelah login berhasil
            window.location.href = '/index.html'; // Ganti dengan path halaman home sesuai kebutuhan
        } else {
            alert('Login failed! Username or password is incorrect.');
        }
    });
});

// Toggle between login and register forms
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    loginForm.classList.toggle('hidden');
    registerForm.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const loginMenu = document.getElementById('login-menu');
    const profileMenu = document.getElementById('profile-menu');
    const profileUsername = document.getElementById('profile-username');
    const logoutButton = document.getElementById('logout-button');

    // Check if user is logged in
    const loggedInUsername = localStorage.getItem('loggedInUsername');

    if (loggedInUsername) {
        // User is logged in
        loginMenu.classList.add('hidden');
        profileMenu.classList.remove('hidden');
        profileUsername.textContent = loggedInUsername;
    } else {
        // User is not logged in
        loginMenu.classList.remove('hidden');
        profileMenu.classList.add('hidden');
    }

    // Logout functionality
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('loggedInUsername');
            loginMenu.classList.remove('hidden');
            profileMenu.classList.add('hidden');
            window.location.href = '/login.html'; // Redirect to login page after logout
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = loginForm.querySelector('#username').value.trim();
            const password = loginForm.querySelector('#password').value.trim();

            // Check stored credentials
            const storedUsername = localStorage.getItem('registeredUsername');
            const storedPassword = localStorage.getItem('registeredPassword');

            if (username === storedUsername && password === storedPassword) {
                localStorage.setItem('loggedInUsername', username);
                window.location.href = '/index.html'; // Redirect to home page after login
            } else {
                alert('Invalid username or password');
            }
        });
    }

    // Register form submission
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = registerForm.querySelector('#username-register').value.trim();
            const email = registerForm.querySelector('#email').value.trim();
            const password = registerForm.querySelector('#password-register').value.trim();

            if (username === '' || email === '' || password === '') {
                alert('Please fill in all fields.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Store registered user data
            localStorage.setItem('registeredUsername', username);
            localStorage.setItem('registeredPassword', password);
            alert('Registration successful');
            toggleForm(); // Switch to login form
        });
    }

    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Toggle between login and register forms
    function toggleForm() {
        if (loginForm) {
            loginForm.classList.toggle('hidden');
        }
        if (registerForm) {
            registerForm.classList.toggle('hidden');
        }
    }
});