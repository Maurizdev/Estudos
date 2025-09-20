/* FUNÇÕES
Uma função JavaScript é um bloco de codigo projetado para executar uma tarefa especifica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saida.

Pode ser encarado como um "mini-projeto" projetados para fazer uma tarefa que vai contribuir para todo o codigo.

Uma função JS é executada quando "algo" a invoca (chama-a).



//Função de soma
function soma(valor1,valor2){
    return valor1 + valor2;
};

document.getElementById("texto").innerHTML = "O valor da soma: " + soma(10,8);

var total = soma(33,9);
//alert(total);


//Função de cotação do dolar
function realParaDolar(real,cotacaoDolar) {
    return real * cotacaoDolar;
};

var valorReal = 6.90;
var cotacao = 5.9;

var total = realParaDolar(valorReal,cotacao);

alert("O valor de " + valorReal + " em dolar fica: " + total);


function alertaHello(){
    alert("Ola Pessoa");
};

function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);
};

var x = paraCelsius(77);
alert("A temperatura é de " + x + " graus celsius");

*/

//Atividade 

// 1. Crie uma função bomDia() que mostra 'Bom dia!' no console.

function bomDia(){
    return "Bom dia";
};

console.log(bomDia());

// 2. Crie uma função quadrado(numero) que retorna o número ao quadrado.

function quadrado(numero){
    return numero ** 2;
};

console.log(quadrado(8));

// 3. Crie uma função converterParaMetros(cm) que recebe cm e retorna em metros.

function converterParaMetros(cm){
    return cm / 100;
};

console.log(converterParaMetros(1000));