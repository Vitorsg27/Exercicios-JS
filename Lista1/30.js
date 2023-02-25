function maiorMenor(array) {
    maior = array[0]
    menor = array[0]
    for (const index in array) {
        if (array[index] > maior) {
            maior = array[index]
        } else if (array[index] < menor){
            menor = array[index]
        }
    }
    console.log("Maior numero: " + maior + " Menor numero: " + menor);
}

maiorMenor([8,10,4,7,7,6,15])