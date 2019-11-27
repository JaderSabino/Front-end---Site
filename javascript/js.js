var verifica = false;

function cadastro(){

    var form = document.getElementById("formulario");

    if(validaCampos()){

        var form = document.querySelector("#formulario");
        var xhr = new XMLHttpRequest();

        var dados = {
            nome: `${form[0].value}`,
            email: `${form[1].value}`,
            sexo: `${form[2].value}`,
            endereco: `${form[3].value}`,
            telefone: `${form[4].value}`,
            dataNasc: `${form[5].value}`,
            cpf: `${form[6].value}`
        }

        var dados = JSON.stringify(dados);

        console.log(dados);

        xhr.open("POST", "http://localhost:8181/usuarios");
        //setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.addEventListener("load", function() {
            if (xhr.status == 200) {
                verifica = true;
                //sucesso!
            } else {
                verifica = false;
                //erro!
            }
        });

        xhr.send(dados);

    }
    if(xhr.status == 200){
        alert('Usuario Cadastrado com sucesso!');
    }else{
        alert('Erro ao cadastrar usuario!');
    }
    
}

function validaCampos(){

    var form = document.getElementById("formulario");

    for(let i = 0; i < form.length ; i++){
        if (form[i].value == ""){
            alert('Favor preencha o campo!');
            form[i].focus();
            return false;
        }
    }
    return true;

}