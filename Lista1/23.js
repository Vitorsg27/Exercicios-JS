function nota(codigo, notas) {
    notas.sort(function (a, b) {
        return a - b;
    });
    notas.reverse();
    console.log(notas);
    notaFinal = ((notas[0] * 4) + (notas[1] * 3) + (notas[2] * 3)) / 10
    console.log(`${codigo}, ${notas[0]}, ${notas[1]}, ${notas[2]} nota final:${notaFinal}`);
    if (notaFinal >= 5) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

nota("SP321", [25, 5, 4])
