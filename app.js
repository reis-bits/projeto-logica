alert('Boas vindas ao jogo do número secreto.');
let numeroSecreto = 5;
console.log(numeroSecreto);
let tentativas = 1;

let resposta;

while(resposta != numeroSecreto) {
    resposta = prompt('Qual o número secreto?');
    if(resposta == numeroSecreto) {
        alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
    } else {
        if(resposta > numeroSecreto) {
            alert(`O número secreto é menor que ${resposta}`);
        } else {
            alert(`O número secreto é maior que ${resposta}`);
        }
        tentativas++;
    }
}
