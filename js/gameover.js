// Variáveis 
var botaoVoltar = document.querySelector('.botaoVoltar');
var pagInicial = '../../index.html'




function abrePag(pag){
        window.open(pag,"_self");
    }



botaoVoltar.addEventListener('click', function(event){
    abrePag(pagInicial);
})

