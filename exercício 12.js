/*
12) Faça um algoritmo que calcule o fatorial de um número.

A fatorial de um número é o produto de todos os números inteiros
positivos menores ou iguais a esse número. É denotada pelo símbolo
"!". Por exemplo, a fatorial de 5 é representada como 5! e é
calculada da seguinte forma:
5! = 5 x 4 x 3 x 2 x 1 = 120

Da mesma forma, a fatorial de 4 é representada como 4! e é
calculada como:
4! = 4 x 3 x 2 x 1 = 24
*/

function calcularFatorial (numero){
    if (numero === 0 || numero === 1){
        return 1 // O fatorial de 0 e 1 é sempre 1
    }

    let resultado = 1
    for (let i = 2; i <= numero; i++)[
        resultado *= i
    ]

    return resultado
}

console.log(calcularFatorial(5))