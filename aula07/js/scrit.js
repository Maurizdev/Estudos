/* Vamos entender Operadores:
-> Os operadores JavaScript são usados para atribuir valores, comparar valores, 
   executar operações aritméticas e muito mais.

São os sinais que usamos: + - * / = ++ -- += -= && || etc...

São separados em 6 "categorias":

1) Operadores Aritméticos (matemáticos)
2) Operadores de Atribuição
3) Operadores de Sequência 
4) Operadores de Comparação 
5) Operador Condicional (Ternário)
6) Operadores Lógicos
*/

// -------------------------
// 1) Operadores Aritméticos
// -------------------------
var valor1 = 5, valor2 = 6, total;

total = valor1 + valor2;
console.log(total); // 11

total = valor1 - valor2;
console.log(total); // -1

total = valor1 * valor2;
alert(total); // 30

total = valor1 / valor2;
alert(total); // 0.833...

total = ++valor1;
alert(total); // 6
alert("O valor1 ficou: " + valor1); // 6

total = --valor1;
alert(total); // 5
alert("O valor1 ficou: " + valor1); // 5

// -------------------------
// 2) Operadores de Atribuição
// -------------------------
valor1 = 5;
valor2 = 6;

valor1 += valor2; // mesma coisa que valor1 = valor1 + valor2
alert(valor1);

valor1 -= valor2; // mesma coisa que valor1 = valor1 - valor2
alert(valor1);

// -------------------------
// 3) Operadores de Sequência
// -------------------------
valor1 = "Yuri ";
valor2 = "Mauriz";

total = valor1 + valor2;
alert(total); // "Yuri Mauriz"

// -------------------------
// 4) Operadores de Comparação
// -------------------------
valor1 = 8;
valor2 = 10;

alert(valor1 == valor2);  // false
alert(valor1 === valor2); // false (compara valor e tipo)
alert(valor1 != valor2);  // true
alert(valor1 !== valor2); // true
alert(valor1 < valor2);   // true
alert(valor1 > valor2);   // false
alert(valor1 <= valor2);  // true
alert(valor1 >= valor2);  // false

// -------------------------
// 5) Operador Condicional (Ternário)
// -------------------------
var idade = 18;
var eleitor = (idade < 18) ? "Não, Eleitor" : "Sim, Eleitor";
alert("A resposta é: " + eleitor); // "Sim, Eleitor"

// -------------------------
// 6) Operadores Lógicos
// -------------------------
// AND (&&), OR (||), NOT (!)

idade = 65;

// resultado = (idade > 60 && idade < 70); // true
// resultado = (idade === 65 || idade === 70); // true
var resultado = !(idade === 65); // false
alert(resultado);
