const somarNumeros = array => {
    let result = 0
    array.forEach(element => {
        result += element
    });
    return result
}

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));