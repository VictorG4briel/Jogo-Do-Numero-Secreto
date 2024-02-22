let listaDeNumerosSorteados = [];
let Numerolimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1' , 'jogo do numero secreto');
    exibirTextoNaTela('p' , 'numero entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
   if(chute== numeroSecreto){
     exibirTextoNaTela('h1','Acertou!');
     let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
     let mensagemtentativas=`Voce descubrir o numero secreto com ${tentativas} ${palavratentativa}`;
     exibirTextoNaTela('p',mensagemtentativas);
     document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if (chute> numeroSecreto){
            exibirTextoNaTela('p', 'numero secreto é menor');
        }else{
            exibirTextoNaTela('p', 'numero secreto é maior');
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolido =parseInt(Math.random()* Numerolimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == Numerolimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolido)
        console.log (listaDeNumerosSorteados)
        return numeroEscolido;
    }
}

function limparCampo(){
    chute= document.querySelector('input');
    chute.value ='';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}