let numeroSecreto = nAleatorio();

function textos(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

    function initmsg(){
        textos('h1', 'Jogo do numero secreto');
        textos('p', 'Escolha um numero entre 1 e 10');
    }
    
    initmsg();

function nAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

let msg;
let tentativas = 1;

function verificarChute(){
    
    let chute = document.querySelector('input').value;
        if (chute == numeroSecreto) {
            tentativas > 1 ? msg='tentativas' : 'tentativa';
            textos('h1',`Você acertou o numero secreto é ${numeroSecreto}, você acertou com ${tentativas} ${msg}`);
            textos('p',`Parabéns &#129395 &#129395 &#129395` );
            document.getElementById('reiniciar').removeAttribute('disabled'); 
        } else {
            chute > numeroSecreto ? textos('p',`O numero secreto é menor que ${chute}`) : textos('p',`O numero secreto é maior que ${chute}`);
            tentativas++
            limpar()
        }
    
}

function limpar(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = nAleatorio();
    limpar();
    initmsg();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}