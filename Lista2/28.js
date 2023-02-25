const filtrarPorQuantidadeDeDigitos = (array, digitos) => array.filter(num => num.toString().length === digitos)

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));