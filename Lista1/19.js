function Valor(codigo, quantidade) {
    switch (codigo) {
        case 100:
            console.log("R$",(quantidade * 3));
            break;
        case 200:
            console.log("R$",(quantidade * 4));
            break;
        case 300:
            console.log("R$",(quantidade * 5.5));
            break;
        case 400:
            console.log("R$",(quantidade * 7.5));
            break;
        case 500:
            console.log("R$",(quantidade * 3.5));
            break;
        case 600:
            console.log("R$",(quantidade * 2.8));
            break;
    
        default:
            console.log("produto não existente");
            break;
    }
}

Valor(700, 2)