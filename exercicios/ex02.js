// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

// 1- informar um numero
//  * calcule
//  * retorne msg

// 2- calcular 
//   * receber
//   * analisar
//   * retornar msg

// 3- não pode numero negativo

// 4- calcular na sequência Fibonacci
//   * Dizer se está ou não na sequência  

// 5- 1. receber um número
//    2. calcular com a sequencia fibonacci
//    3. analisar e comparar com a sequencia
//    4. se pertence a ela - retorne uma msg dizendo q pertence
//    5. se não - retorne uma msg dizendo q n pertence


// input NUMERO
// se 
// NUMERO < 0 
// print "Digite um numero de 0 adiante."
// somar NUMERO com o antecessor a ele 
// analisar se o NUMERO pertence 
// retornar pertence 
// se não
// retornar não pertence

const numero = 13; //parseInt(prompt("Digite um número: 24")), não estava dando certo assim, então é só digitar o número que quiser na variável numero.

let fib1 = 0;
let fib2 = 1;
let encontrado = false

while (fib2 <= numero) {
    if (fib2 === numero) {
        encontrado = true;
        break;
    }
    [fib1, fib2] = [fib2, fib1 + fib2];
}
if(encontrado) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci`);
};
