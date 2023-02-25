function Aumento(plano, salario) {
    switch (plano) {
        case "a":
            salario = salario * 1.1
            console.log(salario);
            break;
        case "b":
            salario = salario * 1.15
            console.log(salario);
            break;
        case "c":
            salario = salario * 1.2
            console.log(salario);
            break;
    
        default:
            console.log("Plano inválido");
            break;
    }
}

Aumento('',1000)