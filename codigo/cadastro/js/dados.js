window.onload=function(){

let nome = document.querySelector('#nome')
let validNome = false
let sobrenome = document.querySelector('#sobrenome')
let validSobrenome = false
let email = document.querySelector('#email')
let validEmail = false
let senha = document.querySelector('#senha')
let validSenha = false
let confirmaSenha = document.querySelector('#confirmaSenha')
let validConfirmSenha = false
let codigo = document.querySelector('#codigo')
let validCodigo = false

let msgErro = document.querySelector('#msgErro')
let msgSucesso = document.querySelector('#msgSucesso')

nome.addEventListener('keyup', () => {
    if (nome.value.length >= 3)
    {
        validNome = true
    }
})
sobrenome.addEventListener('keyup', () => {
    if (sobrenome.value.length >= 3)
    {
        validSobrenome = true
    }
})
email.addEventListener('keyup', () => {
    if (email.value.length >= 3)
    {
        validEmail = true
    }
})
senha.addEventListener('keyup', () => {
    if (senha.value.length >= 6)
    {
        validSenha = true
    }
})
confirmaSenha.addEventListener('keyup', () => {
    if (confirmaSenha.value.length >= 6 && senha.value == confirmaSenha.value)
    {
        validConfirmSenha = true
    }
})
codigo.addEventListener('keyup', () => {
    if (codigo.value.length >= 3)
    {
        validCodigo = true
    }
})

function validatorEmail(email) {
    let emailPattern =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
  }


function cadastrar(){
    if (validNome && validSobrenome && validEmail && validSenha && validConfirmSenha && validCodigo && validRadio && validFoto)
    {   
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
    {
        nomeCad: nome.value,
        sobrenomeCad: sobrenome.value,
        emailCad: email.value,
        senhaCad: senha.value,
        codigoCad: codigo.value
    }
    )

    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    msgSucesso.setAttribute('style', 'display: block')
    msgSucesso.innerHTML = '<strong>Cadastrado com sucesso!</strong>'
    msgErro.setAttribute('style', 'display: none')
    msgErro.innerHTML = ''

    setTimeout(()=>{
        window.location.href = 'http://127.0.0.1:5500/tiaw2022-manha-carona-universitaria/codigo/cadastro/cadastro.html'
    }, 3000)

    } else {
    msgErro.setAttribute('style', 'display: block')
    msgErro.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar!</strong>'
    msgSucesso.innerHTML = ''
    msgSucesso.setAttribute('style', 'display: none')
    }
}
}
