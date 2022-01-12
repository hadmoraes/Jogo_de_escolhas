var escolha;
var botaoFase3 = document.querySelector('#botaoFase3');
var pagAFase3 = '../../html/batman/batmanPerdeuJogo.html';
var pagBFase3 = '../../html/batman/batmanGanhouJogo.html';

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

botaoFase3.addEventListener('click', function(event){
    aparecePrompt()
    abrePagConformeEscolha(pagAFase3, pagBFase3, escolha);
})