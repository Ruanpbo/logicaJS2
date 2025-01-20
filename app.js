let numeroSecreto = nAleatorio();

function textos(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

textos('h1', 'Jogo do numero secreto');
textos('p', 'Escolha um numero entre 1 e 10');

function nAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

let msg;
let tentativas = 1;

function verificarChute(){
    
    let chute = document.querySelector('input').value;
        if (chute == numeroSecreto) {
            tentativas > 1 ? msg='Tentativas' : 'tentativa';
            alert(`Você acertou o numero secreto é ${numeroSecreto}, você acertou com ${tentativas} ${msg}`); 
        } else {
            chute > numeroSecreto ? alert(`O numero secreto é menor que ${chute}`) : alert(`O numero secreto é maior que ${chute}`);
            tentativas++
        }
    
}

