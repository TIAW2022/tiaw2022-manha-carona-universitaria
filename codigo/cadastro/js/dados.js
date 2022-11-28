window.onload = function () {
  let nome = document.querySelector("#nome");
  let validNome = false;
  let sobrenome = document.querySelector("#sobrenome");
  let validSobrenome = false;
  let email = document.querySelector("#email");
  let validEmail = false;
  let senha = document.querySelector("#senha");
  let validSenha = false;
  let confirmaSenha = document.querySelector("#confirmaSenha");
  let validConfirmSenha = false;
  let codigo = document.querySelector("#codigo");
  let validCodigo = false;

  // Pega o valor do select
  let select = document.querySelector("#opcoes");
  let variavel = "";
  select.onchange = function () {
    variavel = this.value;
    console.log(variavel);
  };

  let foto = document.querySelector("#picture__input");

  let msgError = document.querySelector("#msgError");
  let msgSuccess = document.querySelector("#msgSuccess");

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
    if (
      validNome &&
      validSobrenome &&
      validEmail &&
      validSenha &&
      validConfirmSenha &&
      validCodigo
    ) {
      let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

      listaUser.push({
        nomeCad: nome.value,
        sobrenomeCad: sobrenome.value,
        emailCad: email.value,
        senhaCad: senha.value,
        codigoCad: codigo.value,
        opcaoCad: variavel,
      });

      localStorage.setItem("listaUser", JSON.stringify(listaUser));

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
