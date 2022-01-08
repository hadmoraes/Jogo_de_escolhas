//Variáveis comuns a todos
var escolha;

// Variáveis da Primeira Fase
var botaoPrimeiraFase = document.querySelector('#botaoPrimeiraFase');
var pagAPrimeiraFase = '../../html/mulherMaravilha/mulherMaravilhaPrimeiroGameOver.html'
var pagBPrimeiraFase = '../../html/mulherMaravilha/mulherMaravilhaSegundaFase.html'

// Variáveis da Segunda Fase
var botaoSegundaFase = document.querySelector('#botaoSegundaFase');
var pagASegundaFase = '../../html/mulherMaravilha/mulherMaravilhaTerceiraFase.html'
var pagBSegundaFase = '../../html/mulherMaravilha/mulherMaravilhaSegundoGameOver.html'


function aparecePrompt(){
    escolha = prompt('Digite A ou B');
    validaEscolha(escolha);
    return escolha;
}

function validaEscolha(escolha){
    while(escolha != 'A' && escolha != 'B' && escolha!= 'a' && escolha!= 'b'){
        alert('Resposta inválida, digite apenas A ou B');
        escolha = prompt('Digite A ou B');
    }
}

function abrePagSegundoEscolha(paginaA, paginaB, escolha){
    if(escolha == "A"){
        window.open(paginaA);
    } else if(escolha == "a"){
        window.open(paginaA);
    } else{
        window.open(paginaB);
    }
}

// Executando Funções na Primeira Fase
botaoPrimeiraFase.addEventListener('click', function(event){
    aparecePrompt()
    abrePagSegundoEscolha(pagAPrimeiraFase, pagBPrimeiraFase, escolha);
})

// Executando Funções na Segunda Fase
botaoSegundaFase.addEventListener('click', function(event){
    aparecePrompt()
    abrePagSegundoEscolha(pagASegundaFase, pagBSegundaFase, escolha);
})



