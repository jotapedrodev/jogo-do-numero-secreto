let listaDeNumerosSorteados = []
let numeroLimite = 100
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',
    {rate:1.2})
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Numero');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o número secreto com 
        ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O numero secreto é menor');
        
        }else{
            exibirTextoNaTela('p','O numero secreto é maior' );
        }
        tentativas++;
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 100 + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeNumerosNaLista == numeroLimite) {
    listaDeNumerosSorteados= []
    
}

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}



function limparCampo() {
    chute = document.querySelector('input')
    chute.value='';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
   
    limparCampo();
   tentativas = 1;
   mensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled' ,true)
}







//Anotações Listas or (Array):
//sempre se for colocado [] conchetes, fara uma lista exmpl: 
//let numeros = ["2", "6"]
// se a variavel for numeros, para voce descobrir a quantidade de elementos use:
// exmpl: numeros.lenght = 2
// para pegar o ultimo elemento da lista é so fazer, linguagens[linguagens.length -1]

//.includes verifica se o elemento esta na lista, (uma funcao)

//.push insira itens na array depois da lista ser feita, o elemento sera o ultimo;
//.pop remove o ultimo elemento adicionado na lista;


//Speech Voz:
//Atraves desse comando e tambem com uma ligacao com o HTML, nos conseguimos ouvir no site 
//o que esta escrito de acordo com a funcao e o texto.
//responsiveVoice.speak(texto- (O texto),'Brazilian Portuguese Female'- Linguagem,
//{rate:1.2})- Velocidade