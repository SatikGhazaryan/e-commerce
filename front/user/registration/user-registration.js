// 'use strict';

// const form = document.getElementById('reg-form');

// const inputUserName = document.getElementById('username');
// const inputPasswordUser = document.getElementById('passwordUser');

// (async () => {
//     const response = await fetch('http://localhost:3003/registration', {
//         method: 'GET',
//     });
//     const body = await response.json();
//     console.log('body', body);
// }

// )();

// const sub = document.getElementById('sub');
// sub.addEventListener('click', async () =>{
//     const inputUserNameValue = inputUserName.value;
//     const inputUserPasswordValue = inputPasswordUser.value;
//     const reqBody = {
//         nameUser: inputUserNameValue,
//         passworsUser: inputUserPasswordValue,
//     };
//     console.log('reqBody', reqBody);
// })
// try {
//     const response = await fetch("http://localhost:3003/regisyration", {
//       mode: "no-cors",
//       method: "POST",
//       body: JSON.stringify(reqBody),
//       headers: {
//         "Content-Type": "application/json",
//       }

//     });
//     const resBody = await response.json();
//   console.log("resBody", resBody);
//   } catch (error) {
//     console.log("error", error);
//   };

// inputUserName.addEventListener("input", () => {
//   const usrNm = document.querySelector(".usrNm");
//   const userNameText = document.querySelector(".userNameText");
//   const userNamePattern = /^\s*([A-Za-z0-9]{3,20}(\s+|$))*$/;
//   if (inputUserName.value.match(userNamePattern)) {
//     usrNm.classList.add("valid");
//     usrNm.classList.remove("invalid");
//     userNameText.innerHTML = "Your name in Valid";
//   } else {
//     usrNm.classList.add("invalid");
//     usrNm.classList.remove("valid");
//     userNameText.innerHTML = "Must be a valid name";
//   }

//   let smallUserName = [];
//   let smaller = inputUserName.value.toLowerCase();
//   smallUserName = [...smallUserName, smaller];
// });

// inputPasswordUser.addEventListener("input", () => {
//   const usrPswd = document.querySelector(".usrPswd");
//   const passwordText = document.querySelector(".passwordText");
//   const userPassPattern1 = /(?!.* )(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
//   if (
//     inputPasswordUser.value.match(userPassPattern1) &&
//     inputPasswordUser.value.length >= 8 &&
//     inputPasswordUser.value.length <= 16
//   ) {
//     usrPswd.classList.add("valid");
//     usrPswd.classList.remove("invalid");
//     passwordText.innerHTML = "Your Password in Valid";
//   } else {
//     usrPswd.classList.add("invalid");
//     usrPswd.classList.remove("valid");
//     passwordText.innerHTML =
//       "Your password must be greater than 8 and less than 16, it must contain at least one uppercase
//     and one lowercase letter, a special character, a number, it must not contain a space, the name must not be equal to the    password";
//   }
// });

