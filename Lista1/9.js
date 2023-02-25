const processaNota = (nota) => {
    if (nota < 38){
        return "Reprovado"
    } else {
        arredondamento = nota % 5;
        if (arredondamento > 2) {
            return nota + (5 - arredondamento);
        }else{
            return nota;
        }
    }
}

console.log(processaNota(98));