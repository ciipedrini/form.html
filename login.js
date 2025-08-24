var LerDadosEntrar = () => {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || senha === "") {
        alert("Preencha todos os campos!");
    } else if (!validarEmail.test(email)) {
        alert("Digite um e-mail válido!");
    } else {
        alert("Login efetuado com sucesso!");
    }
}
