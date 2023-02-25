const areaDoTriangulo = (base, altura) => {
    let result = (base * altura) / 2
    return result.toFixed(2)
}

console.log(areaDoTriangulo(10, 15));
console.log(areaDoTriangulo(7, 9));
console.log(areaDoTriangulo(9.25, 13.1));