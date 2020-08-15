var numeroInputUser = 3 ;
var numMaxDoX = numeroInputUser -1;
var resultado = "";

for (var i = 0; i < numeroInputUser; i++) {          // linha 1
    for (var j = 0; j < numeroInputUser; j++) {     // coluna 0
        if (j < numMaxDoX ) {    //4
            resultado = resultado + " ";
        } else {
            resultado = resultado + "#";
        }
    }
    resultado = resultado + "\n";
    numMaxDoX--;
}

console.log(resultado);


//for bidimensional
//debugar vai ajudar a entender
//primeiro ele vai incrementar todas as variaveis j , enquanto o i for zero, ate o j2
//dps vai incrementar i e ele será 1 e ira incrementar todos j no i1
//dps incrementa mais 1x o i para se tornar 2 e o j em tds posiçoes
// "\n" quebra a linha*/