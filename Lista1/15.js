function Carro(nome) {
    switch (nome) {
        case "hatch":
            console.log("Compra realizada com sucesso");
            break;
        case "sedan": case "sedan": case "motocicleta": case "caminhonete":
            console.log("Tem certeza que não prefere este modelo?");
            break;
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui");
            break;
    }
}

Carro("motocicleta")