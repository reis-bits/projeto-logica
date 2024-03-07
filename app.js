alert('Boas vindas ao jogo do número secreto.');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let tentativas = 1;

let resposta;

while (resposta != numeroSecreto) {
    resposta = prompt('Qual o número secreto?');
    if (resposta == numeroSecreto) {
        break;
    } else {
        if (resposta > numeroSecreto) {
            alert(`O número secreto é menor que ${resposta}`);
        } else {
            alert(`O número secreto é maior que ${resposta}`);
        }
        tentativas++;
    }
}

let tentativa = tentativas > 1? 'tentativas' : 'tentativa'

alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${tentativa}.`);

/*if (tentativas > 1) {
    alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
} else {
    alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
}*/