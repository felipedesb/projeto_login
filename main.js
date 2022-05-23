
    var loginCadastrado = "felipe";
    var senhaCadastrada = "2022";

    var loginInformado = prompt("Informe seu login");
    var senhaInformada = prompt("Informe sua senha");
    var numeroMaximoTentativas=3;
    var numeroTentativaAtual=1;

    function informeLoginSenha(){

        prompt("Informe seu login");
        prompt("Informe sua senha");

    }


    if(loginInformado==loginCadastrado && senhaInformada==senhaCadastrada){
        location.href = "https://www.porsche.com/middle-east/";
        alert("Bem-vindo ao sistema " + loginInformado);
    }else{

        while(numeroTentativaAtual<=numeroMaximoTentativas){

            alert("Login inválido! Tente novamente");
            informeLoginSenha();
            numeroTentativaAtual=numeroTentativaAtual+1;
            }
                alert("Número máximo de tentativas ultrapassada");
    }                                                                                                                                                                             







