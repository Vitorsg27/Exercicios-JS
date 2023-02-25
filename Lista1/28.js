function parImpar(array) {
    par = 0;
    impar = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 == 0) {
            par++
        } else {
            impar++
        }
    }

    console.log("Numeros pares: " + par + " Numeros impares: " + impar);
}

parImpar([1, 2, 4, 6, 10])