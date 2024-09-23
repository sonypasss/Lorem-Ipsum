let btnPass = document.getElementById('btn_pass_1');
let btnPasss = document.getElementById('btn_pass_2');
let err = document.getElementById('err');
let password = document.getElementById('pswd');

function hidePass() {
    if (password.type === 'password') {
          password.type = 'text';
     } else {
          password.type = 'password';
    }
 };

btnPass.addEventListener('click', hidePass);


function hidePass() {
    if (password.type === 'password') {
          password.type = 'text';
     } else {
          password.type = 'password';
    }
 };

btnPasss.addEventListener('click', hidePass);



const checkPassword = () => {
    for (let i = 0; i < users.length; i++) {
        if (
            password.value === users[i].password &&
            email.value  === users[i].email
        ) {
            dialog.remove();
            user_name.textContent = users[i].name;
            user_email.textContent = users[i].email;
            user_age.textContent = users[i].age;
            acc.classList.remove("hide");
            acc.classList.add("visiblle");
        }
    }
    err.textContent = "Неверные данные";
};

btn.addEventListener("click", checkPassword);