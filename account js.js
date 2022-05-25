let currentPassword = document.getElementById('password-change')
let newPassword = document.getElementById('password-new')
let button = document.getElementById('Changepswd')

button.addEventListener('click',function (){
    let userData = JSON.parse(localStorage.getItem('userdata') || '[]')
    for (let i = 0; i <= userData.length; i++) {
        if (userData[i].Password === currentPassword.value) {
            userData[i]['Password'] = newPassword.value
            localStorage.setItem('userdata', JSON.stringify(userData))
            alert('success')
            break
        }
    }
})



