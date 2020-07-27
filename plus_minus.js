'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr){
    var positivo = 0;
    var negativo = 0;
    var nulo = 0;
 
    for(var i = 0; i < arr.length; i++){
         var valorNoArray = arr[i];
        if (valorNoArray < 0 ){
            negativo = negativo + 1;
        }else if(valorNoArray > 0){
            positivo = positivo +1;
        }else{
            nulo = nulo +1;
        }
    }
    var primeiroElemento = positivo/arr.length ;
    var segundoElemento = negativo/arr.length;
    var terceiroElemento = nulo/arr.length;

    console.log(primeiroElemento.toFixed(6));
    console.log(segundoElemento.toFixed(6));
    console.log(terceiroElemento.toFixed(6));
}

 //1 percorrer o array -done
 //console.log em todos - done
 //descobrir se sao maior menor ou zero 
 //salvar negativos++, positvos++ e neutros++

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
