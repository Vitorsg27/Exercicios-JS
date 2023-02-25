function multiplica(array, number) {
    vetorFinal = []
    for (const i in array) {
        vetorFinal.push(array[i] * number);
    }
    return vetorFinal;
}
function multiplica5(array, number) {
    vetorFinal = []
    for (const i in array) {
        if (array[i] > 5) {
            vetorFinal.push(array[i] * number);
        }
    }
    return vetorFinal;
}

console.log(multiplica([1, 2, 3, 4, 5], 5));
console.log(multiplica5([1, 5, 10, 15, 20], 5));