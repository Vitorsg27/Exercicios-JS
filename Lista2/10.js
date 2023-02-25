const simboloMais = (n) => {
    let result = ""
    for (let i = 0; i < n; i++){
        result = result + "+"
    }
    return result
}

console.log(simboloMais(2));
console.log(simboloMais(4));