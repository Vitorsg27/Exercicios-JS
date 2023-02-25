function concatenar() {
    resultado = []
    for (let index in arguments){
        resultado = resultado.concat(arguments[index])
    }
    return resultado;
}

const vetorInteiro = [1,2,3,4]
const vetorString = ['1','2','3','4']
const vetorDouble = [1.1,1.2,1.3,1.4]

console.log(concatenar(vetorInteiro, vetorString));
console.log(concatenar(vetorInteiro, vetorString, vetorDouble));