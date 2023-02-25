const estaEntre = (numero, minimo, maximo, inclusivo = false) => (numero >= minimo && numero <= maximo) == inclusivo

console.log(estaEntre (10, 50, 100));
console.log(estaEntre (16, 100, 160));
console.log(estaEntre (3, 3, 150));
console.log(estaEntre (3, 3, 150, true));