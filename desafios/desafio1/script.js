function adicionarAoVisor(valor) {
    var visor = document.getElementById('display');
    var valorAtual = visor.value;
    if (valorAtual === 'Erro') 
      limparVisor();
    visor.value += valor;
    visor.scrollLeft = visor.scrollWidth;
}

function limparVisor() {
    document.getElementById('display').value = '';
}

function calcular() {
  var expressao = document.getElementById('display').value;
  try {
    var resultado = eval(expressao);
    if (isNaN(resultado) || !isFinite(resultado)) {
      throw "Erro de cálculo";
    }
    resultado = parseFloat(resultado.toFixed(2));
    document.getElementById('display').value = resultado;
    var displayElement = document.getElementById('display');
    displayElement.style.fontSize = Math.max(10, 50 - (resultado.toString().length * 2)) + 'px';
  } catch (erro) {
    document.getElementById('display').value = 'Erro';
  }
}


document.addEventListener('keydown', function(event) {
    var tecla = event.key;
    if (!isNaN(tecla) || tecla === '.' || tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
      adicionarAoVisor(tecla);
    } else if (tecla === 'Enter') {
      calcular();
    } else if (tecla === 'Backspace') {
      limparVisor();
    }
});