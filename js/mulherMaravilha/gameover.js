var botao = document.querySelector(".botaoVoltar");

function recomeco(){
    window.open("mulherMaravilhaPrimeiro.html");
}

botao.addEventListener('click', function(event){
    recomeco()
})