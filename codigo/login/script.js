// Função para verificar o cadastro do
window.onload = function(){
  var senha = document.getElementById("inputPassword");
  console.log("oi")
  senha.addEventListener("keyup", () => {
    if (senha.value.length <= 2) {
      senha.setAttribute("style", "border-color: red");
      validSenha = false;
      msgError.setAttribute("style", "display: block");
      msgSuccess.innerHTML = "";
      msgSuccess.setAttribute("style", "display: none");
    } else {
      senha.setAttribute("style", "border-color: green");
      validSenha = true;
    } 
  });
}

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
  if (senha.value.length <= 2) {
    senha.setAttribute("style", "border-color: red");
    validSenha = false;
    alert("Preencha todos os campos corretamente antes de logar!")
    /*  msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente antes de logar!</strong>";
        msgError.style.color = "#ac0808";
        msgError.style.padding = "1em";
        msgError.style.border = "1px solid #e40000";
        msgError.style.margin.bottom = "1em";
        msgError.style.background = "#ffd8d8"; 
        
    msgSuccess.innerHTML = "";
    msgSuccess.setAttribute("style", "display: none"); */
  }
  
   
} 


