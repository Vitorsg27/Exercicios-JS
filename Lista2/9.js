const repetir = (elemento, repeticoes) => {
        newArray = []
        for(let i = 0; i < repeticoes; i++){
            newArray.push(elemento)
        }
        return newArray
}

console.log(repetir("codigo", 2));
console.log(repetir(7, 3));