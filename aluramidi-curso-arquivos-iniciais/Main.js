function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play(); // Removi as aspas em 'idElementoAudio' para que o parâmetro seja utilizado corretamente.
}

// Constante
const listaDeTeclas = document.querySelectorAll('.tecla'); // Modifiquei o nome para seguir a convenção de camelCase.

// Variável
let contador = 0;

// Enquanto
while (contador < listaDeTeclas.length) {

    listaDeTeclas[contador].onclick = function() {
        tocaSom('#som_tecla_pom');
    };

    contador = contador + 1; // Alternativa: contador++; ou contador += 1; Incremento corrigido.
    // Dev tools
    console.log(contador); // Espaço removido entre 'console.' e 'log'.
}
