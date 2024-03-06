alert('Boas vindas ao jogo do número secreto.');
let numeroSecreto = 4;

let resposta = prompt('Qual o número secreto?');

if(resposta == numeroSecreto) {
    alert(`Você acertou o número secreto ${numeroSecreto}`);
} else {
    alert(`Você errou, o número secreto é ${numeroSecreto}`);
}