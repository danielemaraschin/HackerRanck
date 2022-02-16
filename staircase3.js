var numeroAddUsuario = 4;
var numeroMaxX = numeroAddUsuario - 1
var resultado = "";

for(var j = 0; j < numeroAddUsuario; j++){
    for(var i = 0; i< numeroAddUsuario; i ++){
        if(i< numeroMaxX){
            resultado = resultado + " ";
        }else{
            resultado = resultado + "X"
        }
    }
    resultado = resultado + "\n";
    numeroMaxX--
}

console.log(resultado)