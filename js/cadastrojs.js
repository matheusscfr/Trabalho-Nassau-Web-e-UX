
let nome = document.querySelector('#form_nome')
let validNome = false
let email = document.querySelector('#form_email')
let validEmail = false
let senha = document.querySelector('#form_senha')
let validSenha = false
let endereco = document.querySelector('#form_endereco')
let validEndereco = false

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){

      validNome = false
    } else {
      validNome = true
    }
  })
  
email.addEventListener('keyup', () => {
    if(usuario.value.length <= 4){

      validUsuario = false
    } else {

      validUsuario = true
    }
  })
  
senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){

      validSenha = false
    } else {

      validSenha = true
    }
  })
endereco.addEventListener('keyup', () => {
    if(senha.value.length <= 5){

      validSenha = false
    } else {

      validSenha = true
    }
  })
  
function cadastrar(){
    if(validNome || validEmail || validSenha || validEndereco){

    }else{
        alert('tudo vazio')
    }
}