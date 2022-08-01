/* eslint-disable no-undef */
/* eslint-disable max-len */
'use strict';
document.getElementById('user').addEventListener('click', registration);

document.getElementById('pop').style.display = 'none';
function registration() {
    document.getElementById('pop').style.display = 'flex';
}
document.getElementById('cls').addEventListener('click', () =>  {
    document.getElementById('pop').style.display = 'none';
});

(async () => {
    const response = await fetch('http://localhost:3003/v1/users', {
        method: 'GET',
        // body: JSON.stringify(requestBody),
        // headers: {
        //     'Content-Type': 'application/json',
        // },
    });
    const requestBody = await response.json();
    console.log(requestBody);
    console.log(response);
})();

if (response.ok) {
    console.log('its ok');
    window.open('user.html');
} else {
    throw new Error('Page not found');
}

const inputUserNameSignUp = document.getElementById('inpUsrNmSignUp');
const inputPasswordUserSignUp = document.getElementById('inpUsrPswdSignUp');
const inputEmailUserSignUp = document.getElementById('inpUsrEmlSignUp');
// const inputPasswordUserLogIn = document.getElementById('inptUsrPswdLgIn');
// const inputEmailUserLogIn = document.getElementById('inpUsrEmlLgIn');
const submitNewUser = document.getElementById('sbmtNewUsr');
// const submitUserLogIn = document.getElementById('sbmtUsrLgIn');

submitNewUser.addEventListener('click', async () => {
    const inputUserNameSignUpValue = inputUserNameSignUp.value;
    const inputEmailUserSignUpValue = inputEmailUserSignUp.value;
    const inputPasswordUserSignUpValue = inputPasswordUserSignUp.value;
    const reqBody = {
        nameUser: inputUserNameSignUpValue,
        passworsUser: inputPasswordUserSignUpValue,
        email: inputEmailUserSignUpValue,
    };
    console.log('reqBody', reqBody);

    inputPasswordUserSignUp.addEventListener('input', () => {
        const usrPswd = document.querySelector('.usrPswd');
        const passwordText = document.querySelector('.passwordText');
        const userPassPattern1 = /(?!.* )(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
        if (inputPasswordUserSignUpValue.match(userPassPattern1)
        && inputPasswordUserSignUpValue.length >= 8
          && inputPasswordUserSignUpValue.length <= 16
        ) {
            usrPswd.classList.add('valid');
            usrPswd.classList.remove('invalid');
            passwordText.innerHTML = 'Your Password in Valid';
        } else {
            usrPswd.classList.add('invalid');
            usrPswd.classList.remove('valid');
            passwordText.innerHTML = 'Your password must be greater than 8 and less than 16, it must contain at least one uppercase and one lowercase letter, a special character, a number, it must not contain a space, the name must not be equal to the  password';
        }
    });

    try {
        const response = await fetch('http://localhost:3003/v1/users', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
            },

        });
        if (response.ok) {
            window.open('user.html');
            console.log('new user created');
        } else {
            throw new Error('new user not created');
        }
    } catch (error) {
        console.log('Create user error', error);
    }
});

