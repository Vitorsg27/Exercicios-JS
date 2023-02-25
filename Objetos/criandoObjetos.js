function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.1)
const p2 = new Produto('Notebook', 2999, 0.1)

Object.defineProperty(p1, "qualidade", {
    enumerable: true,
    writable: false,
    value: 3
})

console.log(Object.keys(p1));
console.log(Object.values(p1));
console.log(Object.entries(p1));

Object.entries(p1).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})
