function calcularArea() {
  var formaSelecionada = document.getElementById("forma").value;
  var resultado = document.getElementById("resultado");
  var inputs = document.getElementById("inputs");
  var area;

  switch (formaSelecionada) {
    case "quadrado":
      var lado = parseFloat(document.getElementById('lado').value);
      if (isNaN(lado) || lado <= 0) {
        resultado.innerText = "Digite um valor válido e positivo para o comprimento do lado.";
        return;
      }
      area = lado * lado;
      break;

    case "retangulo":
      var largura = parseFloat(document.getElementById('largura').value);
      var altura = parseFloat(document.getElementById('altura').value);
      if (isNaN(largura) || largura <= 0 || isNaN(altura) || altura <= 0) {
        resultado.innerText = "Digite valores válidos e positivos para largura e altura.";
        return;
      }
      area = largura * altura;
      break;

    case "triangulo":
      var base = parseFloat(document.getElementById('base').value);
      var alturaTriangulo = parseFloat(document.getElementById('alturaTriangulo').value);
      if (isNaN(base) || base <= 0 || isNaN(alturaTriangulo) || alturaTriangulo <= 0) {
        resultado.innerText = "Digite valores válidos e positivos para base e altura do triângulo.";
        return;
      }
      area = (base * alturaTriangulo) / 2;
      break;

    case "circulo":
      var raio = parseFloat(document.getElementById('raio').value);
      if (isNaN(raio) || raio <= 0) {
        resultado.innerText = "Digite um valor válido e positivo para o raio do círculo.";
        return;
      }
      area = Math.PI * raio * raio;
      break;

    default:
      resultado.innerText = "Selecione uma forma.";
      return;
  }

  resultado.innerText = "A área é: " + area.toFixed(2);
}

// Função para exibir os campos de entrada corretos de acordo com a forma selecionada
document.getElementById("forma").addEventListener("change", function() {
  var formaSelecionada = this.value;
  var inputs = document.getElementById("inputs");
  inputs.innerHTML = ""; // Limpar inputs anteriores ao mudar de forma

  switch (formaSelecionada) {
    case "quadrado":
      inputs.innerHTML = `
        <div class="input-group">
          <label for="lado">Comprimento do lado:</label>
          <input type="number" id="lado" placeholder="Digite o comprimento do lado">
        </div>
      `;
      break;

    case "retangulo":
      inputs.innerHTML = `
        <div class="input-group">
          <label for="largura">Largura:</label>
          <input type="number" id="largura" placeholder="Digite a largura">
        </div>
        <div class="input-group">
          <label for="altura">Altura:</label>
          <input type="number" id="altura" placeholder="Digite a altura">
        </div>
      `;
      break;

    case "triangulo":
      inputs.innerHTML = `
        <div class="input-group">
          <label for="base">Base:</label>
          <input type="number" id="base" placeholder="Digite a base">
        </div>
        <div class="input-group">
          <label for="alturaTriangulo">Altura:</label>
          <input type="number" id="alturaTriangulo" placeholder="Digite a altura">
        </div>
      `;
      break;

    case "circulo":
      inputs.innerHTML = `
        <div class="input-group">
          <label for="raio">Raio:</label>
          <input type="number" id="raio" placeholder="Digite o raio">
        </div>
      `;
      break;
  }
});
