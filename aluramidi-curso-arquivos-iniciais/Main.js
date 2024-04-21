function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio); // Alterei para 'seletorAudio' para coincidir com o nome do parâmetro.
    if (elemento === null) {
        alert('Elemento não encontrado');
    } else {
        elemento.play(); // Melhorei a legibilidade ao remover a condição desnecessária.
    }
}

// Constante
const listaDeTeclas = document.querySelectorAll('.tecla'); // Adicionei '.' antes de 'tecla' para selecionar corretamente pela classe.

// Para cada tecla na lista de teclas
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; // Alterei para pegar a segunda classe.
    const idAudio = `#som_${instrumento}`; // Corrigi a template string para incluir 'instrumento'.
    console.log(idAudio); // Adicionei o log dentro do loop para exibir o ID de áudio de cada tecla.

    // Adicionando eventos à tecla atual
    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') { // Combinei as condições para 'Space' e 'Enter'.
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    };
}
