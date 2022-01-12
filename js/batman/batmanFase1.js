var escolha;
var botaoFase1 = document.querySelector('#botaoFase1');
var pagAFase1 = '../../html/batman/batmanFase2.html' ;
var pagBFase1 = '../../html/batman/batmanGameOver1.html';


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

botaoFase1.addEventListener('click', function(event){
    aparecePrompt();
    abrePagConformeEscolha(pagAFase1, pagBFase1, escolha);
})
