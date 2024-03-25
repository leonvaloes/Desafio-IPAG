# Controle de TV

Este é um exemplo simples de controle de TV em JavaScript. Ele demonstra como conectar um controle remoto a uma TV e ligá-la ou desligá-la, dependendo da compatibilidade entre o controle e a TV.

## Funcionalidades

- Conectar um controle remoto a uma TV.
- Verificar se o controle remoto é compatível com a TV.
- Ligar ou desligar a TV conforme a compatibilidade e o estado atual da TV.

## Instruções de Uso

1. Clone o repositório para o seu ambiente local.
2. Abra o arquivo `index.html` em um navegador da web.
3. Abra o console do navegador para ver os logs de saída.
4. Observe as mensagens de console enquanto as interações entre controles e TVs são executadas.

## Exemplo de Uso

```javascript
let controleLG = new Controle('LG');
let controleSamsung = new Controle('Samsung');
let tvLG = new TV('LG');
let tvSamsung = new TV('Samsung');

conectarControle(controleLG, tvLG);
conectarControle(controleSamsung, tvLG);
```

Este exemplo cria dois controles remotos (um da LG e outro da Samsung) e duas TVs (uma LG e outra Samsung). Em seguida, tenta conectar cada controle remoto a cada TV, exibindo mensagens no console com os resultados.

