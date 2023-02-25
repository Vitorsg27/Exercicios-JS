const filtrarNumeros = (array) => {
    const result = array.filter(array => typeof array === "number")
    return result
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]));
console.log(filtrarNumeros(["a", "c"]));