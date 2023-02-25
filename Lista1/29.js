function contadorIntervalo(array) {
    dentro = 0;
    fora = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] >= 10 && array[index] <= 20) {
            dentro++
        } else {
            fora++
        }
    }
    console.log("Numeros fora do intervalo: " + fora + " Numeros dentro do intervalo: " + dentro);
}

array = [5,10,15,16,20,21]
contadorIntervalo(array)