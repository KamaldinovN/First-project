const form = document.getElementById('form');
const username = document.getElementById('username');
const usernamelogin = document.getElementById('username-login')
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const passwordLogin = document.getElementById('password-login')
const button_submit = document.getElementById('submit')
const button_login = document.getElementById('login')

const saveDataofUser = [];

function loadContent(id) {
    if (id === 'content-form') {
        document.getElementById('content-form-login').style.display = "none";
        document.getElementById('content-form').style.display = "block";
    } else if (id === 'content-form-login') {
        document.getElementById('content-form-login').style.display = "block";
        document.getElementById('content-form').style.display = "none";
    }
}

button_login.addEventListener('click', function (){
    const UsernameLoginValue = usernamelogin.value.trim()
    const PasswordLoginValue = passwordLogin.value.trim()
    const raw = localStorage.getItem('userdata')
    const person = JSON.parse(raw)
    for(let i = 0; i <= 10; i++) {
        if(UsernameLoginValue === person[i].Username && PasswordLoginValue === person[i].Password ){
           // window.location.href = "user_account.html"
            document.getElementById('content-form-login').style.display = "none";
            document.getElementById('content-account').style.display = "block";
            break
        }
        else {
            setErrorFor(usernamelogin, 'Password or login wrong')
            setErrorFor(passwordLogin, 'Password or login wrong')
        }
    }
})




button_submit.addEventListener('click', function SaveData(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

   if(!(usernameValue === '') && !(emailValue === '' ) && !(passwordValue === '' ) && !(password2Value === '' ) && passwordValue === password2Value && isEmail(emailValue)) {
               let DataofUser = {
                   Username: username.value,
                   Password: password.value,
                   Email: email.value
               }
               saveDataofUser.push(DataofUser)
               localStorage.setItem('userdata', JSON.stringify(saveDataofUser))
               // window.location.href = "user_account.html"
       document.getElementById('content-form').style.display = "none";
       document.getElementById('content-account').style.display = "block";
           }
})


//  function CheckSameUser (){
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const raw = localStorage.getItem('userdata')
//     const person = JSON.parse(raw)
//
//     for(let i = 0; i <= 10; i++) {
//         if (person[i].Username === usernameValue && person[i].Email === emailValue) {
//             return false
//         }
//     }
// }



button_submit.addEventListener('click', e => {
    e.preventDefault();
    checkInputs();
});

button_login.addEventListener('click', ev => {
    ev.preventDefault()
    checkInputs()
} )

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else{
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



