function negativo(array) {
    qtd = 0
    for (const index in array) {
        if (array[index] < 0) {
            qtd++
        }
    }
    console.log("Numeros negativos: " + qtd);
}

negativo([-10,10,4,-7,7,6,15])