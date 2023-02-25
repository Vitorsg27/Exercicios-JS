const buscarPalavrasSemelhantes = (palavra, array) => array.filter(str => str.includes(palavra))

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]));
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]));
