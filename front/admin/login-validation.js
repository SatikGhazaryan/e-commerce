/* eslint-disable no-undef */
function inputInit() {
    document.getElementById('notCorrectU').innerHTML = '';
    document.getElementById('notCorrectP').innerHTML = '';
}

const getSubmit = document.getElementById('submit');

getSubmit.addEventListener('click', async () => {
    inputInit();
    const inputName = document.getElementById('userName').value;
    const inputPass = document.getElementById('userPassword').value;

    if (!inputName || !inputPass) {
        document.getElementById('notCorrectP').innerHTML = 'Please fill out both input fields';
        throw new Error('Input fields cannot be empty');
    }

    const requestBody = {
        nameAdmin: inputName,
        passwordAdmin: inputPass,
    };

    try {
        const response = await fetch('http://localhost:3003/admin/login', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // console.log(response);
        if (response.ok) {
            window.open('index.html');
        } else {
            document.getElementById('notCorrectP').innerHTML = 'Your username and password does not match';
            throw new Error('username and password does not match');
        }
    } catch (error) {
        console.log(error);
    }
});

// if (!inputName || !inputPass) {
//     document.getElementById('notCorrectP').innerHTML = 'Please fill out both input fields';
//     throw new Error('Input fields cannot be empty');
// } else if (inputName !== constAdminName || inputPass !== constAdminPasswd) {
//     document.getElementById('notCorrectP').innerHTML = 'Your username and password does not match';
//     throw new Error('username and password does not match');
// }
// window.open('index.html');
// });

const getRefresh = document.getElementById('refresh');
getRefresh.addEventListener('click', () => {
    window.location.reload();
});
