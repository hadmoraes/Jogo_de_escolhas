// Variáveis 
var botaoVoltar = document.querySelector('.botaoVoltar');
var pagInicial = '../../html/start/escolherPersonagem.html'


//Declarando função

function abrePag(pag){
        window.open(pag,"_self");
    }


// Executando Função
botaoVoltar.addEventListener('click', function(event){
    abrePag(pagInicial);
})

