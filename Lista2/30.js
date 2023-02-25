const receberMelhorEstudante = (estudantes) => {
    let melhorDesempenho = { nome: "", media: 0 };
  
    for (let estudante in estudantes) {
      let notas = estudantes[estudante];
      let media = notas.reduce((total, nota) => total + nota) / notas.length;
      
      if (media > melhorDesempenho.media) {
        melhorDesempenho.nome = estudante;
        melhorDesempenho.media = media;
      }
    }
    
    return melhorDesempenho;
  
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}));