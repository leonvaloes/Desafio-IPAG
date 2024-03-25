
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

function verificarPalpite() {
 let palpite = parseInt(document.getElementById('palpite').value);
 let resultado = document.getElementById('resultado');

 if (isNaN(palpite)) {
    resultado.innerHTML = "Por favor, digite um número válido.";
 } else if (palpite < numeroSecreto) {
    resultado.innerHTML = "Seu palpite está abaixo do número secreto.";
 } else if (palpite > numeroSecreto) {
    resultado.innerHTML = "Seu palpite está acima do número secreto.";
 } else {
    resultado.innerHTML = "Parabéns! Você adivinhou o número secreto!";
    document.getElementById("jogarNovamente").classList.remove("display-none");

 }
}

function jogarNovamente() {
 document.getElementById('palpite').value = '';
 document.getElementById('resultado').innerHTML = '';
 numeroSecreto = Math.floor(Math.random() * 100) + 1;
 document.getElementById("jogarNovamente").classList.add("display-none");

}
