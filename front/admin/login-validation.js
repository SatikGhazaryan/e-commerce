/* eslint-disable no-undef */
function inputInit() {
    document.getElementById('notCorrectU').innerHTML = '';
    document.getElementById('notCorrectP').innerHTML = '';
}

const getSubmit = document.getElementById('submit');
getSubmit.addEventListener('click', () => {
    inputInit();
    // here we will connect DB, admin collection
    const constAdminName = 'a';
    const constAdminPasswd = 'ap';
    const inputName = document.getElementById('userName').value.toLowerCase();
    const inputPass = document.getElementById('userPassword').value;
    if (!inputName || !inputPass) {
        document.getElementById('notCorrectP').innerHTML = 'Please fill out both input fields';
        throw new Error('Input fileds cannot be empty');
    } else if (inputName !== constAdminName || inputPass !== constAdminPasswd) {
        document.getElementById('notCorrectP').innerHTML = 'Your username and password does not match';
        throw new Error('username and password does not match');
    }
    window.open('index.html');
});

const getRefresh = document.getElementById('refresh');
getRefresh.addEventListener('click', () => {
    window.location.reload();
});
