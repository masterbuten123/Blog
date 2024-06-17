document.addEventListener('DOMContentLoaded', (event) => {
    const registerBtn = document.getElementById('registerBtn');
    const loginBtn = document.getElementById('loginBtn');
    const registerPopup = document.getElementById('registerPopup');
    const loginPopup = document.getElementById('loginPopup');
    const closeBtns = document.querySelectorAll('.onclose');

    registerBtn.onclick = function() {
        registerPopup.style.display = "block";
    }

    loginBtn.onclick = function() {
        loginPopup.style.display = "block";
    }

    closeBtns.forEach(closeBtn => {
        closeBtn.onclick = function() {
            registerPopup.style.display = "none";
            loginPopup.style.display = "none";
        }
    });

    window.onclick = function(event) {
        if (event.target == registerPopup) {
            registerPopup.style.display = "none";
        }
        if (event.target == loginPopup) {
            loginPopup.style.display = "none";
        }
    }
});
