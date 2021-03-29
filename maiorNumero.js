 let min = 1
 let max = 30
 let resultado = 0;


    //Entrada de dados na matriz
    for(lin=0; lin<dimensao; lin++){
    
        for(col=0; col<dimensao; col++){
            valorRandom = MIN + (rand() % (MAX - MIN + 1));//calcula valor aleatório entre MIN e MAX
            matriz[lin][col] = valorRandom; // aloca o valor aleatório a cada elementro da matriz
            resultado("%3d ", matriz[lin][col]);//Retorna a matriz NxN aleatória
        }
        resultado + "\n";
    }
    //Encontrando o maior numero da matriz
    maiorNum = matriz[0][0];
    for(lin=0; lin<dimensao; lin++)
    {
        for(col=0; col<dimensao; col++)
        {
            if(maiorNum<matriz[lin][col])
            {
                maiorNum=matriz[lin][col];//maior numero da matriz
                linMax=lin;
            }
        }
    }
    //preciso pegar a linha do maior numero e ver qual o menor numero
    minimax = matriz[linMax][0];//inicia com o 1o elemento de cada linha
    for(col=1; col<dimensao; col++)
    {
        if(minimax > matriz[linMax][col])
            minimax = matriz[linMax][col];
    }
    printf("\nO elemento minimax da matriz vale %d \n\n", minimax);
    return 0;