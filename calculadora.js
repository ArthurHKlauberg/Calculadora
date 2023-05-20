const reader = require('readline-sync');


console.log("Digite a primeira nota");
let nota1 = parseInt(reader.prompt());
console.log("Digite a segunda nota");
let nota2 = parseInt(reader.prompt());

function escolha() {
    console.log("1 - Somar ");
    console.log("2 - Multiplicar");
    console.log("3 - Dividir")
    console.log("4 - Sair")
}


function soma() {
    const soma = nota1 + nota2;
    console.log("O resultado da soma é", soma);
}


function multiplicar() {
    const multiplicacao = nota1 * nota2;
    console.log("O resultado da multiplicação é",multiplicacao);
}


function dividir() {
    const divisao = nota1 / nota2;
    console.log("O resultado da divisão é",divisao);
}

function tratarOpcao(opcao) {
    if(opcao == 1) {
        console.log("Somando");
        soma();
    } else if (opcao == 2) {
        console.log("Multiplicando");
        multiplicar();
    } else if (opcao == 3) {
        console.log("Divindo");
        dividir();
    } else if (opcao == 4) {
        console.log("Saindo da Calculadora");

    }
}



let opcao = -1
while (opcao != 4) {
    escolha();
    opcao = parseInt(reader.prompt());
    tratarOpcao(opcao);
}

