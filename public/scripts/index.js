window.addEventListener('DOMContentLoaded', () => {
    emptyLoginFields();
});

function emptyLoginFields() {
    let submitBtn = document.getElementById('submit');
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    submitBtn.addEventListener('click', () => {
        if(username.value === '') {
            username.style = `border-color: red`;
        } else {
            username.style = `border-color: none`;
        }

        if(password.value === '') {
            password.style = `border-color: red`;
        } else {
            password.style = `border-color: none`;
        }

        if(username.value != '' && password.value != '') {
            localStorage.setItem('username', username.value);
            window.location.replace('./home.html');
        }
    });
}