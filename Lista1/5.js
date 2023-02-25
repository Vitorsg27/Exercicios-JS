const arrumar = (valor) => {
    valorEmReais = (`R$ ${valor.toFixed(2).toString().replace(".",",")}`)
    return valorEmReais
}

console.log(arrumar(0.1+0.2))
