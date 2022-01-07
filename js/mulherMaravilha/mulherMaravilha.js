// Variáveis da Primeira Fase
var botaoPrimeiraFase = '#botaoPrimeiraFase';
var paginaAPrimeiraFase = '../../html/mulherMaravilha/mulherMaravilhaPrimeiroGameOver.html'
var paginaBPrimeiraFase = '../../html/mulherMaravilha/mulherMaravilhaSegundaFase.html'
var escolha;

function aparecePrompt (){
    escolha = prompt('Digite A ou B');
    return escolha
}

function usuarioEscolhe(paginaA, paginaB, escolha){
    if(escolha == "A" || 'a'){
        window.open(paginaA);
    } else{
        window.open(paginaB);
    }
}

// Executando Funções na Primeira Fase
botaoPrimeiraFase.addEventListener('click', function(event){
    aparecePrompt()
    while(escolha != 'A' && escolha != 'B' && escolha!= 'a' && escolha!= 'b'){
        alert('Resposta inválida, digite apenas A ou B');
        escolha = prompt('Digite A ou B');
    }
    usuarioEscolhe(paginaA, paginaB, escolha);
})
