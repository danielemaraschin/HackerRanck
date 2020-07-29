
// imprimir quantidade de números
// Complete the birthdayCakeCandles function below.

var totaldeVelas = 4;

var ar = new Array(4);
ar[0] = 3;
ar[1] = 2;
ar[2] = 1;
ar[3] = 3;


var maiorVela = 0;

for (var i = 0; i < totaldeVelas; i++) {

        if (ar[i] > maiorVela) {
        maiorVela = ar[i];
    }
}

var quantidadeVelas = 0;

for (var i = 0; i < totaldeVelas; i++) {
    if (ar[i] == maiorVela) {
        quantidadeVelas = quantidadeVelas + 1;
    }
}    

return quantidadeVelas;