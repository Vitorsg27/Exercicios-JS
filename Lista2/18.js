const despesasTotais = (produtos) => {
    let total = 0;
    for (let i = 0; i < produtos.length; i++) {
        total += produtos[i].preco
    }
    return total;
}

console.log(despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]));
console.log(despesasTotais([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
])); 