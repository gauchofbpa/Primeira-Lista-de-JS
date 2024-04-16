// Questão 01 //
function somarNumeros() {
    let soma = 0;
    let continuar = true;
    while (continuar) {
        let numero = parseFloat(prompt("Digite um número (ou digite '0' para encerrar):"));
        if (!isNaN(numero)) {
        soma += numero;
        } else {
            alert("Por favor, digite um número válido.");
        }
        continuar = confirm("Deseja adicionar mais números?");
        }
    alert("A soma dos números é: " + soma);
}

// Questão 02 //
function contagemRegressiva() {
    let contagem = 10;
    while (contagem > 0) {
        alert(contagem);
        contagem -= 1;
    }
}

// Questão 03 //
function balancoFinanceiro() {
    let brutoTotal = 0;
    let gastoTotal = 0;
    let saldoFinanceiro = 0;
    for (let i = 1; i < 13; i++) {
        let bruto = parseFloat(prompt("Digite o ganho bruto da empresa no mês " + i));
        if (!isNaN(bruto)) {
            brutoTotal = brutoTotal + bruto;
        } else {
            alert("Por favor, digite um número válido.");
        }
    }
    for (let i = 1; i < 13; i++) {
        let gasto = parseFloat(prompt("Digite o gasto da empresa no mês " + i));
        if (!isNaN(gasto)) {
            gastoTotal = gastoTotal + gasto;
        } else {
            alert("Por favor, digite um número válido.");
        }
    }
    alert("A soma total do ganho bruto da sua empresa é de: " + brutoTotal);
    alert("A soma total do gasto da sua empresa é de: " + gastoTotal);
    saldoFinanceiro = brutoTotal - gastoTotal;
    alert("O seu saldo financeiro ficou no valor de " + saldoFinanceiro);
    if (gastoTotal > brutoTotal) {
        alert("Você infelizmente teve um prejuízo :(");
    } else {
        alert("Você teve lucro na empresa, parabéns!");
    }
}

// Questão 04 //
function decrescente() {
    let numero = [];
    for (let i = 0; i < 4; i++) {
        numero.push(parseFloat(prompt("Digite um número inteiro:")));
        if (!isNaN(numero[i])) {
        } else {
            alert("Por favor, digite um número válido.");
        }
    }
    numero.sort((a, b) => b - a);
    alert("Seus números em ordem decrescente ficaram da seguinte forma: " + numero);
}

// Questão 05 //
function parImpar () {
    let continuar = true;
    while (continuar) {
        let numero = parseFloat(prompt("Digite um número par ou ímpar, e o algoritmo irá inverter!"));
        if (!isNaN(numero) && numero != 0) {
            if (numero % 2 == 0) {
                alert("O número "+numero+" é par, para inverter ele, o algoritmo adicionará +1. Seu número agora é o "+(numero += 1)+" e ele é ímpar!");
            } else {
                alert("O número "+numero+" é ímpar, para inverter ele, o algoritmo adicionará +1. Seu número agora é o "+(numero += 1)+" e ele é par!");
            }
        } else {
            alert("Por favor, digite um número válido.");
        }
        continuar = confirm("Deseja continuar invertendo?");
    }
}

// Questão 06 //
function vogalConsoante() {
    let continuar = true;
    while (continuar) {
        let letra = (prompt("Digite uma letra e o algoritmo dirá se é vogal ou consoante"));
        let resultado = letra.toLowerCase();
        if ((resultado) == "a" || (resultado) == "e" || (resultado) == "i" || (resultado) == "o" || (resultado) == "u") {
            alert("A letra que você digitou é uma vogal!");   
        } else {
            if (!isNaN(resultado)) {
                alert("Digite um caractere, não um número!");
            } else {
                alert("A letra que você digitou é uma consoante");
            }
        }
        continuar = confirm("Deseja continuar?");
    }
}

// Questão 07 //
function picole() {
    let sabor = [["chocolate", 1.50], ["morango", 2.50], ["creme", 2.50], ["manga", 3.20], ["melancia", 3.40], ["vanilla ice", 3.00], ["ceu azul", 3.60], ["brownie", 4.00], ["hawaiano", 5.00]];
    let i = 0;
    let opcao = "";
    opcao = prompt("Informe o sabor de sua escolha");
    for (i = 0; i < sabor.length; i++) {
        console.log(sabor[i][0] + ": " + sabor[i][1]);
    }
    for (i = 0; i < sabor.length; i++) {
        if (opcao === sabor [i][0]) {
            console.log("O picolé de sabor" + sabor[i][0] + "custa R$" + sabor[i][1]);
        }
    }
}