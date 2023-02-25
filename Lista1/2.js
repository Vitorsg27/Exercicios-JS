function classificarTriangulo(a,b,c) {
    if (arguments.length == 3){
        if (a == b && b == c) {
            return ('Triangulo Equilátero')
        }
        if (a == b || a == c || b == c){
            return ('Triangulo Isósceles')
        } else {
            return ('Triangulo Escaleno')
        }
    } else{
        return ('Isso não é um triangulo')
    }
}
console.log(classificarTriangulo(2,1,2));
