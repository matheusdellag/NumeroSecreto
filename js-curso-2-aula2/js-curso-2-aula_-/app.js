let listaDeNumerosSorteados = [];
let numeroMaximo =3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextonaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextonaTela('h1', 'Jogo do número secreto');
    exibirTextonaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextonaTela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativa}`;
        exibirTextonaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroSecreto>chute) {
            exibirTextonaTela('p', `O número secreto é maior que ${chute}`)
        }  else {
            exibirTextonaTela('p', 'O número secreto é menor');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numeroMaximo+1);
    let quantidadeDeNumerosEscolhidos = listaDeNumerosSorteados.length;
    
    if (quantidadeDeNumerosEscolhidos==numeroMaximo){
        listaDeNumerosSorteados=[];
    };
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}
    


