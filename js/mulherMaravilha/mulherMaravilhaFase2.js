// Variáveis da Segunda Fase
var escolha;
var botaoFase2 = document.querySelector('#botaoFase2');
var pagAFase2 = '../../html/mulherMaravilha/mulherMaravilhaFase3.html';
var pagBFase2 = '../../html/mulherMaravilha/mulherMaravilhaGameOver2.html';

//Declarando funções

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

function abrePagConformeEscolha(paginaA, paginaB, escolha){
    if(escolha == "A"){
        window.open(paginaA,"_self");
    } else if(escolha == "a"){
        window.open(paginaA,"_self");
    } else{
        window.open(paginaB,"_self");
    }
}

// Executando Funções na Segunda Fase
botaoFase2.addEventListener('click', function(event){
    aparecePrompt();
    abrePagConformeEscolha(pagAFase2, pagBFase2, escolha);
})