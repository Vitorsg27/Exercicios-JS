const multiplicar = (n1, n2) => {
    if (n1 >= 0 && n2 >= 0){
        let aux = n1
        for(let i = 1; i < n2; i++){
            n1 += aux
        }
        return n1
    } else {
        return "Valor inválido"
    }
}

console.log(multiplicar(5,5));
console.log(multiplicar(0,7));
