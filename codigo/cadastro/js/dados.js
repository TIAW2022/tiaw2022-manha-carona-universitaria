window.onload = function () {
  var listaUser = [];

  var foto = document.querySelector("#picture__input");

  var validNome = false;
  var validSobrenome = false;
  var validEmail = false;
  var validSenha = false;
  var validConfirmSenha = false;
  var validCodigo = false;

  function validatorEmail(email) {
    let emailPattern =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
  }

  console.log(validatorEmail("texto@texto.com")); // true
  console.log(validatorEmail("texto@texto")); // false
  console.log(validatorEmail("texto.com")); // false
  console.log(validatorEmail("texto")); // false

  nome.addEventListener("keyup", () => {
    if (nome.value.length <= 3) {
      nome.setAttribute("style", "border-color: red");
      validNome = false;
    } else {
      nome.setAttribute("style", "border-color: green");
      validNome = true;
    }
  });

  sobrenome.addEventListener("keyup", () => {
    if (sobrenome.value.length <= 3) {
      sobrenome.setAttribute("style", "border-color: red");
      validSobrenome = false;
    } else {
      sobrenome.setAttribute("style", "border-color: green");
      validSobrenome = true;
    }
  });

  email.addEventListener("keyup", () => {
    if (validatorEmail(email.value) !== true) {
      email.setAttribute("style", "border-color: red");
      validEmail = false;
    } else {
      email.setAttribute("style", "border-color: green");
      validEmail = true;
    }
  });

  senha.addEventListener("keyup", () => {
    if (senha.value.length <= 5) {
      senha.setAttribute("style", "border-color: red");
      validSenha = false;
    } else {
      senha.setAttribute("style", "border-color: green");
      validSenha = true;
    }
  });
  confirmaSenha.addEventListener("keyup", () => {
    if (confirmaSenha.value.length <= 5) {
      confirmaSenha.setAttribute("style", "border-color: red");
      validConfirmSenha = false;
    } else {
      confirmaSenha.setAttribute("style", "border-color: green");
      validConfirmSenha = true;
    }
  });

  codigo.addEventListener("keyup", () => {
    if (codigo.value.length <= 6) {
      codigo.setAttribute("style", "border-color: red");
      validCodigo = false;
    } else {
      codigo.setAttribute("style", "border-color: green");
      validCodigo = true;
    }
  });

  foto.addEventListener("change", () => {
    const fr = new FileReader();

    fr.readAsDataURL(foto.files[0]);

    fr.addEventListener("load", () => {
      const url = fr.result;

      localStorage.setItem("my-image", url);
    });
  });

  cadastro1.onclick = function cadastrar() {
    var nome = document.querySelector("#nome").value;
    var sobrenome = document.querySelector("#sobrenome").value;
    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha").value;
    var confirmaSenha = document.querySelector("#confirmaSenha").value;
    var select = document.querySelector("#opcoes").value;
    var codigo = document.querySelector("#codigo").value;

    var msgError = document.querySelector("#msgError");
    var msgSuccess = document.querySelector("#msgSuccess");

    if (
      validNome &&
      validSobrenome &&
      validEmail &&
      validSenha &&
      validConfirmSenha &&
      validCodigo
    ) {
      var novoUsuario = {
        nomeUsuario: nome,
        sobrenomeUsuario: sobrenome,
        emailUsuario: email,
        senhaUsuario: senha,
        codigoUsuario: codigo,
        opcaoUsuario: select,
      };

      listaUser.push(novoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(listaUser));

      if (senha.value != confirmaSenha.value) {
        alert("Senha incorreta");
        msgError.setAttribute("style", "display: block");
        msgError.innerHTML =
          "<strong>Preencha todos os campos corretamente antes de cadastrar!</strong>";
        msgSuccess.innerHTML = "";
        msgSuccess.setAttribute("style", "display: none");
      } else {
        msgSuccess.setAttribute("style", "display: block");
        msgSuccess.innerHTML = "<strong>Cadastrado com sucesso!</strong>";
        msgError.setAttribute("style", "display: none");
        msgError.innerHTML = "";
      }

      setTimeout(() => {
        window.location.href =
          "http://127.0.0.1:5500/tiaw2022-manha-carona-universitaria/codigo/login/index.html";
      }, 3000);
    } else {
      msgError.setAttribute("style", "display: block");
      msgError.innerHTML =
        "<strong>Preencha todos os campos corretamente antes de cadastrar!</strong>";
      msgSuccess.innerHTML = "";
      msgSuccess.setAttribute("style", "display: none");
    }
  };
};
