const inverso = function (valor) {
    if (typeof valor === "boolean") {
        if (valor == true) {
            valor = false
        } else {
            valor = true
        }
        return valor
    } else if (typeof valor === "number") {
        valor = valor * (-1)
        return valor
    } else {
        return "booleano ou númerico esperados, mas o parâmetro é do tipo " + typeof(valor)
    }
}

console.log(inverso(true));
console.log(inverso("6"));
console.log(inverso(-2000));
console.log(inverso("programação"));

