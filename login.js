var LerDadosEntrar = () =>{
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email !== "" && senha !=="") {
        alert("Login efetuado com sucesso!");}
        else{
            alert("Preencha todos os campos!");
        }
    }
