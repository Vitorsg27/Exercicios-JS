function troco(valor) {
    var notas = []
    if (valor >= 100) {
        notas[0] = Math.floor(valor / 100)
        valor = valor % 100
    }
    if (valor >= 50) {
        notas[1] = Math.floor(valor / 50)
        valor = valor % 50
    }
    if (valor >= 10) {
        notas[2] = Math.floor(valor / 10)
        valor = valor % 10
    }
    if (valor >= 5) {
        notas[3] = Math.floor(valor / 5)
        valor = valor % 5       
    }
    if (valor <= 5 && valor >= 1) {
        notas[4] = Math.floor(valor / 1)
        valor = valor % 1       
    }

    if (notas[0] > 0) {
        console.log(`${notas[0]} nota(s) de R$100. `);
    }
    if (notas[1] > 0) {
        console.log(`${notas[1]} nota(s) de R$50. `);
    }
    if (notas[2] > 0) {
        console.log(`${notas[2]} nota(s) de R$10. `);
    }
    if (notas[3] > 0) {
        console.log(`${notas[3]} nota(s) de R$5. `);
    }
    if (notas[4] > 0) {
        console.log(`${notas[4]} nota(s) de R$1. `);
    }
}

troco(128);