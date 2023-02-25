function objectToArrayOfArrays(obj) {
    const result = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
            result.push([key, obj[key]]);
        }
    }

    return result;
}

console.log(objectToArrayOfArrays({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}));

console.log(objectToArrayOfArrays({
    codigo: 11111,
    preco: 12000
}));