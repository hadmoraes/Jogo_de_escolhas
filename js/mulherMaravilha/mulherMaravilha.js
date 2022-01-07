var botaoPrimeiraFase = document.querySelector(".botaoEscolha");


function usuarioEscolhe(){
    let escolha = prompt('Digite A ou B');
    if(escolha == "A" || 'a'){
        window.open('D:\Resilia\modulo1\projeto de fim de modulo\codigo\html\mulherMaravilha\mulherMaravilhaPrimeiroGameOver.html');
    } else if(escolha == "B" || 'b'){
        window.open("D:\Resilia\modulo1\projeto de fim de modulo\codigo\html\mulherMaravilha\mulherMaravilhaSegundaFase.html");
    } else {
        alert('Sua resposta não é válida. Digite apenas A ou B');
//        window.open("D:\Resilia\modulo1\projeto de fim de modulo\codigo\html\mulherMaravilha\mulherMaravilhaPrimeiraFase.html");
    }
}

botaoPrimeiraFase.addEventListener('click', function(event){
    usuarioEscolhe()
})