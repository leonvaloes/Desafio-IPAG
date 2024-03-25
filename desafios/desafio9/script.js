function calcularFinanciamento() {
    let valorTotal = parseFloat(document.getElementById('valorTotal').value);
    let quantidadeParcelas = parseInt(document.getElementById('quantidadeParcelas').value);
    let taxaJurosAnual = parseFloat(document.getElementById('taxaJurosAnual').value) / 100;
   
    let taxaEfetivaMensal = Math.pow(1 + taxaJurosAnual, 1/12) - 1;
    let valorParcela = valorTotal * (taxaEfetivaMensal / (1 - Math.pow(1 + taxaEfetivaMensal, -quantidadeParcelas)));
    let custoEfetivoTotal = valorParcela * quantidadeParcelas - valorTotal;
   
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `
       <p>Valor da parcela: R$ ${valorParcela.toFixed(2)}</p>
       <p>Valor total a ser pago: R$ ${(valorParcela * quantidadeParcelas).toFixed(2)}</p>
       <p>Custo efetivo total: R$ ${custoEfetivoTotal.toFixed(2)}</p>
       <p>Taxa efetiva mensal: ${(taxaEfetivaMensal * 100).toFixed(2)}%</p>
    `;
   }
   