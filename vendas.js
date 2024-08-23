var nomeProduto = prompt("Digite o nome do Produto: "); // Coca cola
var quantidadeVendida = parseInt(prompt("Digite a quantidade vendida:")); // 1
var valorProduto = parseFloat(prompt("Digite o valor do Produto:")); 50
var totalVenda = quantidadeVendida * valorProduto; // 50 * 1 = 50
console.log("O total da venda é: " + totalVenda); // 50
var porcentagemDesconto = parseInt(prompt("Digite a % de Desconto:")); // 10%
var porcentagemDecimal = porcentagemDesconto / 100; // 0.1
var descontoReais = totalVenda * porcentagemDecimal; // 5
console.log("O Total de Desconto em R$ é: " + descontoReais); // 5
var totalDesconto = totalVenda - descontoReais; // 45
console.log("O produto " + nomeProduto + " gerou um total de: " + totalDesconto + " a pagar."); 