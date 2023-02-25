const calcularMedia = array => {
    let result = 0
    for (i = 0; i < array.length; i++) {
        result += array[i]
    }
    return result / array.length
}

console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));