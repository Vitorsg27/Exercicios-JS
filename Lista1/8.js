function calcularJogadas(jogos){
    let melhorJogo = jogos[0]
    let indiceMelhorJogo = 0
    let piorJogo = jogos[0]
    let superou = 0;
    for (let i in jogos) {
        if (jogos[i] > melhorJogo){
            superou++
            melhorJogo = jogos[i]
            indiceMelhorJogo = i
        }
        if (jogos[i] < piorJogo){
            piorJogo = i
        }
    }
    return [superou, Number(indiceMelhorJogo)]
}

console.log(calcularJogadas([10,20,20,8,25,3,0,30,1]))