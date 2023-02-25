Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {   //passando o indice(i) e o array(this) apenas para seguir a especificação
            newArray.push(this[i])
        }
    }
    return newArray;
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const fragil = p => p.fragil == true
const caro = p => p.preco > 2000
console.log(produtos.filter2(fragil).filter2(caro));