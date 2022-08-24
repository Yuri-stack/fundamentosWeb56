function hello(){
    alert("Hello World")
}

let nome = document.getElementById('nome');
let email = document.getElementById('email');
let assunto = document.getElementById('assunto');

function enviar(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Todos os campos devem ser preenchidos")
    }else{
        alert("Seu feedback foi enviado")
    }
}

//Location
let espaco = document.getElementById('espaco')
// let espaco = document.querySelector('#espaco')

function getSpace(){
    let url = location.href
    espaco.innerHTML = `URL: ${url}`
}

// Dark Theme
function darkTheme(){
    document.body.classList.toggle('dark-theme')
}