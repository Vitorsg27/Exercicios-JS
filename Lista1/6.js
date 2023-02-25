const jurosComposto = (capitalInicial, taxaJuros,meses) => {
    for (i = 0;i < meses; i++){
        capitalInicial = Number(capitalInicial * (taxaJuros/100 + 1)).toFixed(2)
    }
    return capitalInicial;
}
const jurosSimples = (capitalInicial, taxaJuros, meses) => {
    result = capitalInicial + (((taxaJuros/100) * capitalInicial) * meses)
    return result
}

console.log(jurosSimples(10,20,3));
console.log(jurosComposto(10,20,3));