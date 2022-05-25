let username = document.getElementById('username');
let usernamelogin = document.getElementById('username-login')
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let passwordLogin = document.getElementById('password-login')
let button_submit = document.getElementById('submit')
let button_login = document.getElementById('login')

let flag = false

button_login.addEventListener('click', function (){
    let UsernameLoginValue = usernamelogin.value.trim()
    let PasswordLoginValue = passwordLogin.value.trim()

    let userdata = getDataFromLocalStorage()
    for(let i = 0; i <= 10; i++) {
        if(UsernameLoginValue === userdata[i].Username && PasswordLoginValue === userdata[i].Password ){
            window.location.href = 'Account.html'
            break
        }
        else {
            setErrorFor(usernamelogin, 'Password or login wrong')
            setErrorFor(passwordLogin, 'Password or login wrong')
        }
    }
})

button_submit.addEventListener('click', function SaveData(){
    if(Blanc() && CheckSameUser()) {
       let DataOfUser = {
           Username: username.value,
           Password: password.value,
           Email: email.value,
       }
       let userData = getDataFromLocalStorage()
        userData.push(DataOfUser)
        localStorage.setItem('userdata', JSON.stringify(userData))
        alert('success')
        window.location.href = 'Account.html'
   }
    else{
        alert('Something wrong, choose unique password or this email already exist')
    }
})
function CheckSameUser(){
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let userData = getDataFromLocalStorage()
    for(let i = 0; i < userData.length ; i++ ){
        if(userData[i].Password === passwordValue || userData[i].Email === emailValue){
            return flag
        }
        else{
            flag = true
            return flag
        }
    }
}

function Blanc(){
    let emailValue = email.value.trim();
    let usernameValue = username.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();
    return !(usernameValue === '') && !(emailValue === '') && !(passwordValue === '') && !(password2Value === '') && passwordValue === password2Value && isEmail(emailValue)
}

function getDataFromLocalStorage(){
    return JSON.parse(localStorage.getItem('userdata') || '[]')
}




button_submit.addEventListener('click', e => {
    e.preventDefault()
    checkInputs()
})

button_login.addEventListener('click', ev => {
    ev.preventDefault()
    checkInputs()
} )

function checkInputs() {
    let usernameValue = username.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let password2Value = password2.value.trim()
    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank')
    } else {
        setSuccessFor(username)
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email')
    } else {
        setSuccessFor(email)
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else {
        setSuccessFor(password)
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank')
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match')
    } else{
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



