function media(array) {
    let soma = 0
    for (const index in array) {
        soma = soma + array[index]
    }
    result = soma / array.length
    return Math.round(result);
}

console.log(media([9,7,8]));