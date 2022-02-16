function staircase(n) {

    var numeroInputUser = 6;
    var numMaxDoX = numeroInputUser -1;
    var resultado = "";
    
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
    
    console.log(resultado);
    
    }