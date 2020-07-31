var ar = new Array(4);
ar[0] = -1;
ar[1] = 2;
ar[2] = 1;
ar[3] = 3;
ar[4] = 1;


var menorVela =  Number.MAX_VALUE //99999999
var totaldeVelas = ar.length;

console.log(menorVela);

for (var i = 0; i < totaldeVelas; i++) {

    if (ar[i]  < menorVela) {
        menorVela = ar[i];
    }
}
var quantidadeVelasMenores = 0;

for (var i = 0; i < totaldeVelas; i++) {
    if (ar[i] == menorVela) {
        quantidadeVelasMenores = quantidadeVelasMenores + 1;
    }
}    
console.log(menorVela);
console.log(quantidadeVelasMenores);
