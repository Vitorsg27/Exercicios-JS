const funcaoDaSorte = num => {
    let numSorteado = Math.round(Math.random() * (10 - 1) + 1)
    if (num == numSorteado) {
        return "Parabéns! O número sorteado foi o " + numSorteado
    } else {
        return "Que pena! O número sorteado foi o " + numSorteado        
    }
}

console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(5));
console.log(funcaoDaSorte(5));