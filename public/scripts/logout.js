window.addEventListener('DOMContentLoaded', () => {
    let username = localStorage.getItem('username');
    let body = document.getElementById('msg');
    body.innerText = `Have a great day ${username}!`;

    localStorage.removeItem('username');
});