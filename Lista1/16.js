function Calculadora(a, op, b) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Operação inválida"
    }
}

console.log(Calculadora(2,'+',3));