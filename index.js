const listaQTDnumeros = ['escolha',5,6,7];
const listaDeNumeros = ['escolha', 50,60,70]

function selecionarElemento(elemento) {
    return document.querySelector(elemento);
}

const caminhoDivContainerInformacoes = selecionarElemento('#container-informacoes');
const caminhoDivContainerDisplay = selecionarElemento('#container-display');

function criarLabelSelection(textLabel, idSelection, listaEscolhas) {
    const labelGenerico = document.createElement('label');
    labelGenerico.textContent = textLabel;
    labelGenerico.setAttribute('for', idSelection);

    const selectGenerico = document.createElement('select');
    selectGenerico.id = idSelection

    for(let i = 0; i < listaEscolhas.length; i += 1) {
        const optionGenerico = document.createElement('option');
        optionGenerico.value = listaEscolhas[i];
        optionGenerico.textContent = listaEscolhas[i];
        selectGenerico.appendChild(optionGenerico);
    }

    const divGenerica = document.createElement('div')
    divGenerica.id = 'divGenericaSelect';
    divGenerica.appendChild(labelGenerico);
    divGenerica.appendChild(selectGenerico);
    return divGenerica
}

caminhoDivContainerInformacoes.appendChild(criarLabelSelection('Escolha a quantidade de numeros:', 'selectQtdNumerosSorteados', listaQTDnumeros));

caminhoDivContainerInformacoes.appendChild(criarLabelSelection('Escolha ate qual numero:', 'selectNumeros', listaDeNumeros));

const butaoIniciar = document.createElement('button');
butaoIniciar.className = 'butaoEstilo';
butaoIniciar.textContent = 'sortear'
caminhoDivContainerInformacoes.appendChild(butaoIniciar);

const butaoReiniciar = document.createElement('button');
butaoReiniciar.className = 'butaoEstilo';
butaoReiniciar.textContent = 'reiniciar'
caminhoDivContainerInformacoes.appendChild(butaoReiniciar);

const elementoselection = selecionarElemento('#selectQtdNumerosSorteados')

console.log(elementoselection.value);

// selecionando o elemento select de qtd de numeros para criar o evento de displays; 

const selectionQtdElement = selecionarElemento('#selectQtdNumerosSorteados');

function functionModificarDisplay() {
    caminhoDivContainerDisplay.innerHTML = ''

    const quantidadeNumerosSorteio = Number(selectionQtdElement.value);

    for(let i = 1; i <= quantidadeNumerosSorteio; i += 1) {
        const divGenerica = document.createElement('div');
        divGenerica.className = 'container-display-teste';
        caminhoDivContainerDisplay.appendChild(divGenerica)
    }
}

selectionQtdElement.addEventListener('change', functionModificarDisplay)

// selecionado o elemento de numeros para criar evento no display

const selectionNumeros = selecionarElemento('#selectNumeros')

function functionModificarNumeroDisplay() {
    const selecioandoDivGenericaDisplay = document.querySelectorAll('.container-display-teste');

    selecioandoDivGenericaDisplay.forEach(function(div) {
        div.innerHTML = '';
    });

    selecioandoDivGenericaDisplay.forEach(function(div) {
        const paragrafo = document.createElement('p');
        const numerosUsuario = Number(selectionNumeros.value);
        const mensagem = `1-${numerosUsuario}`;
        paragrafo.textContent = mensagem; 
        div.appendChild(paragrafo);
    });
}

selectionNumeros.addEventListener('change', functionModificarNumeroDisplay)

// selecionando o butao sortear e criando a função;

const listaDeNumerosUsados = [];

function gerarNumeroAleatorio(numeroMax) {
    let numeroAleatorio = Math.floor(Math.random() * numeroMax) + 1;
    if (listaDeNumerosUsados.includes(numeroAleatorio)) {
        return gerarNumeroAleatorio(numeroMax);
    } else {
        listaDeNumerosUsados.push(numeroAleatorio);
        return numeroAleatorio;
    }
}

function funcaoIniciar() {
    const SelecionandoDivsGenericas = document.querySelectorAll('.container-display-teste')
    
    SelecionandoDivsGenericas.forEach(function(div) {
        div.innerHTML = '';
    })

    SelecionandoDivsGenericas.forEach(function(div){
        const numerogerado = gerarNumeroAleatorio(selectionNumeros.value)
        const paragrafo = document.createElement('p');
        paragrafo.textContent = numerogerado; 
        div.appendChild(paragrafo);
        
    })
}

butaoIniciar.addEventListener('click', funcaoIniciar);

// pegando botao reiniciar e criando a logica dele.

function funcaoReiniciar() {
    location.reload();
}

butaoReiniciar.addEventListener('click', funcaoReiniciar);









