
let titulo = document.querySelector('h1');
titulo.innerHTML = 'hora do desafio';

function verificarConsole(){
    console.log ('O botão console foi clicado!')

};

function verificarAlert(){
    alert ('Eu amo JS');

};


function qualaCidade(){
    let cidade = prompt ('Diga o nome de uma cidade'); 
    alert (`Estive em ${cidade} e lembrei de você`);

};

function realizarSoma(){
    let valor1 = parseFloat(prompt ('Digite um número'));
    let valor2 = parseFloat(prompt ('Digite outro valor'));
    alert (valor1 + valor2); 
};

