function anuidade(mes, valor) {
    if (mes <1 || mes > 12 || mes == undefined  || valor == undefined) {
        return "Dados inválidos"
    }
    for (let i = 1; i < mes; i++) {
       valor = valor *1.05        
    }
    return valor;
}

console.log(anuidade(1, null));