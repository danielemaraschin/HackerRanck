/*var matrizInputada = 3
let resultado = [];

//cria random, armazena, mostra
for( j= 0; j < matrizInputada; j++){
    for( i = 0; i < matrizInputada; i++){

        var valorRandom = Math.round(Math.random() * 10);
        resultado[j,i] = valorRandom
        //arry.push([value_1, value2]);
        //console.log(resultado)
    }   
    //resultado + '\n'
}
//console.log(resultado)

*/
var linha = new Array(4);

for (var i = 0; i < linha.length; i++) {
  var coluna = new Array(4);
  for (var j = 0; j < coluna.length; j++) { // cria colunas
    var valorRandom = Math.round(Math.random() * 10);
    coluna[j] = valorRandom;
  
  }

  linha[i] = coluna;// atribui valor das colunas pra cada linha do array

}

console.table(linha)


