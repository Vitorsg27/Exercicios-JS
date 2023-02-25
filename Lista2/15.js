const receberSomenteOsParesDeIndicesPares = array => {
    const result = []
    for (const key in array) {
        if ((key % 2 == 0) && (array[key] % 2 == 0)) {
            result.push(array[key])
        }
    }
    return result
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));