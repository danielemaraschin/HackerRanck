//somar somente os index ímpares
var arr = [1,7,6,4,5]
var somaArrSemPar = 0
var soma = 0


for(var i = 0; i< arr.length; i++){
    if(i%2 != 0){
        soma += arr[i];
    }
}
console.log(soma)

