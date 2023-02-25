function conceito(notas) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] <= 4.9) {
            notas[i] = "D"
        } else if (notas[i] <= 6.9) {
            notas[i] = "C"
        } else if (notas[i] <= 8.9) {
            notas[i] = "B"
        } else if (notas[i] <= 10) {
            notas[i] = "A"
        } else {
            return "Nota Invalida"
        }
    }
    return notas
}
notas = [9,8.9,7,6.9,5,4.9]
console.log(conceito(notas));