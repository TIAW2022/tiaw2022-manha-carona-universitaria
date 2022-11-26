// Função para verificar o cadastro do
function logar() {
  var email = document.getElementById("inputEmail");
  var senha = document.getElementById("inputPassword");
  var cadEmail = localStorage.getItem("emailUser");
  var cadSenha = localStorage.getItem("senhaUser");

  const parsedEmail = cadEmail.slice(2, cadEmail.length - 2);
  const parsedSenha = cadSenha.slice(2, cadSenha.length - 2);

  if (email.value === parsedEmail && senha.value === parsedSenha) {
    alert("Usuario autenticado!");
    window.location.href =
      "/codigo/tela principal/index.html";
  } else {
    alert("Email ou senha invalidos!");
  }
}
