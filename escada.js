var nInput = 3
var nMaxX = nInput -1
var resultado = ""

for (var j=0; j< nInput; j++){
    for (var i = 0; i< nInput; i++){
        if (i < nMaxX){
           resultado = resultado + " " 
        } else{
            resultado = resultado + "x" 
        }
    }
    resultado = resultado + '\n'
    nMaxX--
}

console.log(resultado)