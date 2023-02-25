function diaUtil(dia) {
    if (dia < 1 || dia > 31) {
        return "Dia Invalido"
    } else {
        dia = dia % 7
    }
    switch (dia) {

        case 0:
            return "Dia inutil";
        case 1:
            return "Dia inutil";
        default:
            return "Dia Util";
    }
}

console.log(diaUtil(7));