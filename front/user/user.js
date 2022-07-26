/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

document.getElementById('user').addEventListener('click', registration);

document.getElementById('pop').style.display = 'none';
function registration() {
    document.getElementById('pop').style.display = 'flex';
}
document.getElementById('cls').addEventListener('click', () =>  {
    document.getElementById('pop').style.display = 'none';
});

async () => {
    const response = await fetch('v1/users', {  //  http://localhost:3003/v1/users
        method: 'GET',
    });
    const requestBody = await response.json();
    console.log(requestBody);
    console.log(response);
};

const submitNewUser = document.getElementById('sbmtNewUsr');
submitNewUser.addEventListener('click', async () => {
    const inputNameSignUp = document.getElementById('inpUsrNmSignUp');
    const inputPasswordSignUp = document.getElementById('inpUsrPswdSignUp');
    const inputEmailSignUp = document.getElementById('inpUsrEmlSignUp');
    inputEmailSignUp.addEventListener('input', () => {
        const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1-30}$/;
        if (inputEmailSignUp.value.match(emailPattern)) {
            console.log('valid');
            // your code ...... email is ok
        } else {
            console.log('invalid');
            // your code .... email error
        }
    });
    inputPasswordSignUp.addEventListener('input', () => {
        const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/;
        if (inputPasswordSignUp.value.match(passwordPattern)) {
            console.log('valid');
            // your code ...... password is ok
        } else {
            console.log('invalid');
            // your code .... password error
            // your password must be at least 6-16 characters as well as contain at least one uppercase,one lowercase,one number
        }
    }) ;
    const reqBody = {
        name: inputNameSignUp.value,
        password: inputPasswordSignUp.value,
        email: inputEmailSignUp.value,
    };
    console.log('reqBody', reqBody);
    try {
        const response = await fetch('/v1/users', {  //  http://localhost:3003/v1/users
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const body = await response.json();
        console.log('resBody', body);
    } catch (error) {
        console.log('Create user error', error);
    }
});

const submitLogIn = document.getElementById('sbmtUsrLgIn');
submitLogIn.addEventListener('click', async () => {
    const inputPasswordLogIn = document.getElementById('inptUsrPswdLgIn');
    const inputEmailLogIn = document.getElementById('inpUsrEmlLgIn');
    if (!inputEmailLogIn.value || !inputPasswordLogIn.value) {
        // your code Input fields cannot be empty
        console.log('Input fields cannot be empty');
    }

    const reqBody = {
        email: inputEmailLogIn.value,
        password: inputPasswordLogIn.value,
    };

    try {
        const response = await fetch('/v1//user/login', {  //  http://localhost:3003/v1//user/login
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            // your code about login changes
            console.log('log In');
        } else {
            console.log('Your username and password does not match');
            // your code about user log In error
        }
    } catch (error) {
        console.log(error);
    }
});

const icons = document.getElementById('burger');
document.getElementById('mobileMenu').style.display = 'none';
icons.addEventListener('click', () =>  {
    document.getElementById('mobileMenu').style.display = 'block';
});

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('mobileMenu').style.display = 'none';
});

async function getData() {
    const response = await fetch('/v1/users', {
        method: 'GET',
    });

    const body = await response.json();
    const { products, categories } = body.data;

    // console.log('Data', body.data);
    // console.log('Products', products);
    // console.log('Categories', categories);
    // eslint-disable-next-line no-unreachable
    creatTable(products);
    return body.data;
}

getData();

function creatTable(products) {
    products.forEach(element => {
        const div = document.createElement('div');
        div.id = 'product';
        for (const kay in element) {
            if (kay === 'imgUrl') {
                const img = document.createElement('img');
                let url = element.imgUrl;

                if (url.match(/fakepath/)) {
                    const tempUrl = url.replace(/C:\\fakepath\\/i, '');
                    url = `../images/${tempUrl}`;
                }

                img.src = url;
                div.append(img);
            } else if (kay === 'name') {
                const h1 = document.createElement('h1');
                h1.innerHTML = element.name;
                div.append(h1);
            } else if (kay === 'description') {
                const p1 = document.createElement('p');
                p1.innerHTML = element.description;
                div.append(p1);
            } else if (kay === 'price') {
                const p1 = document.createElement('p');
                p1.innerHTML = `${element.price} $`;
                div.append(p1);
            }
        }

        document.getElementById('table').append(div);
    });
}
