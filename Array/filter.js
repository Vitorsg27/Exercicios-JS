const produtos = [
    { nome: 'Notebook', preco : 2499, fragil : true },
    { nome: 'Ipad Pro', preco : 4199, fragil : true },
    { nome: 'Copo de Vidro', preco : 12.49, fragil : true },
    { nome: 'Copo de Plástico', preco : 18.99, fragil : false }
]

const fragil = p => p.fragil == true
const caro = p => p.preco > 2000
console.log(produtos.filter(fragil).filter(caro));