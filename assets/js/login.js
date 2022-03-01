let infologin = document.querySelector('#loginsend')
infologin.addEventListener('click', ()=> {
let email = document.querySelector('#email').value
let password = document.querySelector('#password').value
const info = {
    email: email,
    password: password
}


    fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    .then(response => response.json())
    .then((data) => {
        localStorage.setItem('token', data.token)
        if(data.ok == false) {
           return alert('Datos inválidos')
        }
        location.replace('index.html')
    })
    .catch(error => {
        console.log(error)
    })
})


$('#medium').click(() => {
    location.replace('index.html')
})