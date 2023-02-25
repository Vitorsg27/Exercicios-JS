function alturas(altura1, taxa1, altura2, taxa2) {
    if (altura1 > altura2) {
        if (taxa1 < taxa2) {
            anos = 0
            while (altura1 >= altura2) {
                altura1 = altura1 + taxa1
                altura2 = altura2 + taxa2
                anos++
            }
            console.log("Criaça dois estara maior em " + anos + " ano(s)");
        } else {
            console.log("Criança 1 continuará maior");
        }
    } else if (altura1 < altura2) {
        if (taxa1 > taxa2) {
            anos = 0
            while (altura1 <= altura2) {
                altura1 = altura1 + taxa1
                altura2 = altura2 + taxa2
                anos++
            }
            console.log("Criaça um estara maior em " + anos + " ano(s)");
        } else {
            console.log("Criança 2 continuará maior");
        }

    } else if (taxa1 > taxa2) {
        console.log("Criança 1 estará maior em 1 ano");
    } else if (taxa1 < taxa2) {
        console.log("Criança 2 estará maior em 1 ano");
    } else {
        console.log("Crianças do mesmo tamanho e taxa de crescimento iguais");
    }

}

alturas(150, 1, 150, 2)