alert('Boas vindas ao jogo do número secreto.');
const numeroMax = 100
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
console.log(numeroSecreto);
let tentativas = 1;

let resposta;

while (resposta != numeroSecreto) {
    resposta = prompt(`Qual o número secreto entre 1 e ${numeroMax}?`);
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

let tentativaPalavra = tentativas > 1? 'tentativas' : 'tentativa'

alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${tentativaPalavra}.`);

/*if (tentativas > 1) {
    alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
} else {
    alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
}*/