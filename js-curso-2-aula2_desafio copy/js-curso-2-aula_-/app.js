
//desafio 1
function IMC(peso, altura){
    return parseFloat(alert (`${peso/(altura**2)}`));

}

IMC ((80.5),(1.80));

//desafio 2 (função for não estudada ainda, pego na internet)
function calcularfatorial(numero){
    if(numero===1 || numero===0){
        return 1;}
    let fatorial = 1;
    for (let i=2; i<=numero; i++){
        fatorial*=i;
    }
    
    return fatorial;

};
console.log(calcularfatorial(2));

//desafio 3
function conversaoDolarReal(dolares){
    cotação = parseFloat(4.80);
    return alert (`Você possui ${dolares*(cotação)} reais em dólares`);
};
conversaoDolarReal(100);

//desafio 4
function ExibirTextonaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

function medidaSalaRetangular(largura, comprimento){
    return ExibirTextonaTela('p', `A sala possui as seguintes medidas: ${largura*comprimento} metros de área
     e ${(largura*2)+(comprimento*2)} de perímetro`); 
};
//medidaSalaRetangular(5,7);

//desafio 5

function medidaSalaCircular(raio){
    return ExibirTextonaTela('p' ,`A sala possui as seguintes medidas: área total de ${3.14*(raio**2)} metros e perímetro de ${(2*3.14*raio).toFixed(2)} metros`);
};

//medidaSalaCircula(5);

//Desafio 6 (ESTUDAR CONCEITO FOR)
function tabuada(num){
   for (let i = 1; i<= 10; i++) {
    let resultado = num * i;
    console.log(`${num} x ${i} = ${resultado}`); 
   }  
   
};

tabuada(8);











