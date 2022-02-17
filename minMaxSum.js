var arr= [0, 1, 2, 3, 4];
var somaMaior = 0;
var somaMenor = 0;


var soma = 0;
for(var i = 0; i < arr.length; i++) {
    soma += arr[i];
}
console.log(soma);


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
}
//isso nao esta pronto e eh uma mistura de exercicios