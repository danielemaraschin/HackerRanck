var numeroInputUser = 4;
    var numMaxDoX = numeroInputUser -1;
    var resultado = "";

function staircase(n) {
    
    for (var i = 0; i < numeroInputUser; i++) {          
        for (var j = 0; j < numeroInputUser; j++) {    
            if (j < numMaxDoX ) {    //4
                resultado = resultado + " ";
            } else {
                resultado = resultado + "#";
            }
        }
        resultado = resultado + "\n";
        numMaxDoX--;
    }
    return resultado
}
console.log(staircase());
    