const removerPropriedade = (objeto, propriedade) => {
    let newObject = Object.assign({}, objeto)
    delete newObject[propriedade]
    return newObject;
}

console.log(removerPropriedade({ a: 1, b: 2 }, "a"));
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao"));




