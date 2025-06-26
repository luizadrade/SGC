let prompt = require('prompt-sync')();

// Dados iniciais
let produtos = ["Salgado", "Refrigerante", "Suco", "Bolo", "Chocolate"];
let quantidades = [];
let limiteCritico = 10;

// Registro de estoque inicial
for (let i = 0; i < produtos.length; i++) {
    let qtd;
    do {
        qtd = parseInt(prompt(`Digite a quantidade inicial de "${produtos[i]}": `));
        if (isNaN(qtd) || qtd < 0) {
            console.log("Quantidade inválida. Digite um número inteiro positivo.");
        }
    } while (isNaN(qtd) || qtd < 0);

    quantidades.push(qtd);
}
// Verificação de estoque crítico
console.log("\n=== Verificação de Estoque Crítico ===");
for (let i = 0; i < produtos.length; i++) {
    if (quantidades[i] < limiteCritico) {
        console.log(`ALERTA: Estoque crítico de "${produtos[i]}" - apenas ${quantidades[i]} unidades.`);
    }
}
// Menu interativo
let opcao;
do {
    console.log("\n=== Menu da Cantina ===");
    console.log("1. Visualizar Estoque");
    console.log("2. Registrar Venda");
    console.log("3. Repor Estoque");
    console.log("4. Sair");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            console.log("\n=== Estoque Atual ===");
            for (let i = 0; i < produtos.length; i++) {
                console.log(`${produtos[i]}: ${quantidades[i]} unidades`);
            }
            break;

        case "2":
            let nomeVenda = prompt("Digite o nome do produto vendido: ");
            let indexVenda = produtos.findIndex(p => p.toLowerCase() === nomeVenda.toLowerCase());

            if (indexVenda === -1) {
                console.log("Produto não encontrado!");
                break;
            }

            let qtdVenda = parseInt(prompt("Digite a quantidade vendida: "));
            if (isNaN(qtdVenda) || qtdVenda <= 0) {
                console.log("Quantidade inválida.");
            } else if (qtdVenda <= quantidades[indexVenda]) {
                quantidades[indexVenda] -= qtdVenda;
                console.log(`Venda registrada: ${qtdVenda} unidades de ${produtos[indexVenda]}.`);
            } else {
                console.log("Estoque insuficiente para esta venda!");
            }
            break;

        case "3":
            let nomeRepor = prompt("Digite o nome do produto para repor: ");
            let indexRepor = produtos.findIndex(p => p.toLowerCase() === nomeRepor.toLowerCase());

            if (indexRepor === -1) {
                console.log("Produto não encontrado!");
                break;
            }

            let qtdRepor = parseInt(prompt("Digite a quantidade a ser adicionada: "));
            if (isNaN(qtdRepor) || qtdRepor <= 0) {
                console.log("Quantidade inválida.");
            } else {
                quantidades[indexRepor] += qtdRepor;
                console.log(`Reposição feita: agora ${produtos[indexRepor]} tem ${quantidades[indexRepor]} unidades.`);
            }
            break;

        case "4":
            console.log("Encerrando o sistema. Até logo!");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== "4");
4
