// Function to open the popup
function openPopup() {
    let popupContainer = document.getElementById('popup-container');

    if (!popupContainer) {
        popupContainer = document.createElement('div');
        popupContainer.id = 'popup-container';
        popupContainer.className = 'modal';
        document.body.appendChild(popupContainer);
    }

    fetch('popup.html')
        .then(response => response.text())
        .then(data => {
            popupContainer.innerHTML = data;
            popupContainer.style.display = 'block';

            // Attach event listeners
            document.querySelector('.close-btn').addEventListener('click', closePopup);
            document.querySelector('.toggle-register-btn').addEventListener('click', showRegisterForm);
            document.querySelector('.toggle-login-btn').addEventListener('click', showLoginForm);

            // Initialize form handlers
            document.getElementById('loginForm').addEventListener('submit', handleLogin);
            document.getElementById('registerForm').addEventListener('submit', handleRegister);
        })
        .catch(error => console.error('Error loading popup:', error));
}

// Function to close the popup
function closePopup() {
    const popupContainer = document.getElementById('popup-container');
    if (popupContainer) {
        popupContainer.style.display = 'none';
    }
}

// Function to show the register form
function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

// Function to show the login form
function showLoginForm() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

// Function to handle login
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    fetch('login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'dashboard.php';
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}

// Function to handle registration
function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    fetch('register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.success) {
            window.location.href = 'dashboard.php';
        }
    })
    .catch(error => console.error('Error:', error));
}
