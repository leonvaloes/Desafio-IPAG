const formulario = document.getElementById('formularioNumeros');
const divResultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);

    const maiorNumero = Math.max(numero1, numero2, numero3);
    const menorNumero = Math.min(numero1, numero2, numero3);

    divResultado.innerHTML = `
        <p>O maior número é: ${maiorNumero}</p>
        <p>O menor número é: ${menorNumero}</p>
    `;
    document.getElementById("resultado").classList.remove("display-none");
});