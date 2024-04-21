function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
//constante
const ListadeTeclas = document.querySelectorAll('.tecla');
//variavel
let contador = 0;

//enquato
while (contador<9) {
    ListadeTeclas[0].onclick=tocaSomPom;

    contador= (contador + 1);
    //dev tools
    console. log(contador);
}