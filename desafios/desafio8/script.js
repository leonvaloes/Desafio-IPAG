document.addEventListener('DOMContentLoaded', function () {
    const elementoInputArquivo = document.getElementById('inputArquivo');
    const elementoEstatisticas = document.getElementById('estatisticas');
    let dadosVendas = [];

    elementoInputArquivo.addEventListener('change', function (event) {
        const arquivo = event.target.files[0];
        const leitor = new FileReader();

        leitor.onload = function (e) {
            const conteudo = e.target.result;
            dadosVendas = CSVToArray(conteudo);
            exibirEstatisticas();
        };

        leitor.readAsText(arquivo);
    });

    function CSVToArray(strData, strDelimiter = ",") {
        const arrData = [];
        const arrLines = strData.split("\n");
        arrLines.forEach(line => {
            const arrRow = line.split(strDelimiter);
            arrData.push(arrRow);
        });
        return arrData;
    }

    function exibirEstatisticas() {
        const estatisticasProduto = {};
        const estatisticasRegiao = {};
        const estatisticasTipoProdutoPorPais = {};

        dadosVendas.forEach(venda => {
            const regiao = venda[0];
            const pais = venda[1];
            const tipoProduto = venda[2];
            const receita = parseFloat(venda[11]);
            const unidadesVendidas = parseInt(venda[8]);

            if (!isNaN(receita) && !isNaN(unidadesVendidas)) {
                if (!estatisticasProduto[tipoProduto]) {
                    estatisticasProduto[tipoProduto] = {
                        unidadesVendidas: 0,
                        receita: 0
                    };
                }
                estatisticasProduto[tipoProduto].unidadesVendidas += unidadesVendidas;
                estatisticasProduto[tipoProduto].receita += receita;

                if (!estatisticasRegiao[regiao]) {
                    estatisticasRegiao[regiao] = {
                        unidadesVendidas: 0,
                        receita: 0
                    };
                }
                estatisticasRegiao[regiao].unidadesVendidas += unidadesVendidas;
                estatisticasRegiao[regiao].receita += receita;

                if (!estatisticasTipoProdutoPorPais[pais]) {
                    estatisticasTipoProdutoPorPais[pais] = {};
                }
                if (!estatisticasTipoProdutoPorPais[pais][tipoProduto]) {
                    estatisticasTipoProdutoPorPais[pais][tipoProduto] = 0;
                }
                estatisticasTipoProdutoPorPais[pais][tipoProduto] += unidadesVendidas;
            }
        });

        elementoEstatisticas.innerHTML = "<h1>Estatísticas por Tipo de Produto</h1>";
        for (const tipoProduto in estatisticasProduto) {
            if (estatisticasProduto.hasOwnProperty(tipoProduto)) {
                const estatisticas = estatisticasProduto[tipoProduto];
                const estatisticasProdutoHTML = `
                    <div class="estatisticas-produto">
                        <h2>${tipoProduto}</h2>
                        <ul>
                            <li>Unidades Vendidas: ${estatisticas.unidadesVendidas}</li>
                            <li>Receita Total: R$ ${estatisticas.receita.toFixed(2)}</li>
                        </ul>
                    </div>`;
                elementoEstatisticas.innerHTML += estatisticasProdutoHTML;
            }
        }

        elementoEstatisticas.innerHTML += "<h1>Estatísticas por Região</h1>";
        for (const regiao in estatisticasRegiao) {
            if (estatisticasRegiao.hasOwnProperty(regiao)) {
                const estatisticas = estatisticasRegiao[regiao];
                const estatisticasRegiaoHTML = `
                    <div class="estatisticas-regiao">
                        <h2>${regiao}</h2>
                        <ul>
                            <li>Unidades Vendidas: ${estatisticas.unidadesVendidas}</li>
                            <li>Receita Total: R$ ${estatisticas.receita.toFixed(2)}</li>
                        </ul>
                    </div>`;
                elementoEstatisticas.innerHTML += estatisticasRegiaoHTML;
            }
        }

        elementoEstatisticas.innerHTML += "<h1>Tipo de Produto Mais Vendido por País</h1>";
        for (const pais in estatisticasTipoProdutoPorPais) {
            if (estatisticasTipoProdutoPorPais.hasOwnProperty(pais)) {
                let tipoProdutoMaisVendido = "";
                let unidadesMaisVendidas = 0;
                for (const tipoProduto in estatisticasTipoProdutoPorPais[pais]) {
                    if (estatisticasTipoProdutoPorPais[pais].hasOwnProperty(tipoProduto)) {
                        const unidadesVendidas = estatisticasTipoProdutoPorPais[pais][tipoProduto];
                        if (unidadesVendidas > unidadesMaisVendidas) {
                            tipoProdutoMaisVendido = tipoProduto;
                            unidadesMaisVendidas = unidadesVendidas;
                        }
                    }
                }
                const tipoProdutoMaisVendidoHTML = `
                <div class="tipo-produto-mais-vendido">
                    <h2>${pais}</h2>
                    <p>Tipo de Produto Mais Vendido: ${tipoProdutoMaisVendido}</p>
                </div>`;
            elementoEstatisticas.innerHTML += tipoProdutoMaisVendidoHTML;
        }
    }
}
});
