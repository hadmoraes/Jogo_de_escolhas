var escolha = prompt('Digite A ou B');

// Variáveis da Primeira Fase
var botaoPrimeiraFase = '#botaoPrimeiraFase';
var paginaAPrimeiraFase = '../../html/mulherMaravilha/mulherMaravilhaPrimeiroGameOver.html'
var paginaBPrimeiraFase = '../../html/mulherMaravilha/mulherMaravilhaSegundaFase.html'



while(escolha != 'A' && escolha != 'B' && escolha!= 'a' && escolha!= 'b'){
    alert('Resposta inválida, digite apenas A ou B');
    escolha = prompt('Digite A ou B');
}

function usuarioEscolhe(paginaA, paginaB){
    if(escolha == "A" || 'a'){
        window.open(paginaA);
    } else{
        window.open(paginaB);
    }
}

// Executando Funções na Primeira Fase
botaoPrimeiraFase.addEventListener('click', function(event){
    usuarioEscolhe(paginaA, paginaB)
})



