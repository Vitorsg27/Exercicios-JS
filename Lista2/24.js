const contarCaractere = (caracter, string) => {
    let contador = 0
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == caracter) {
            contador++
        }
    }
    return contador
}

console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));