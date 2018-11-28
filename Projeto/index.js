console.log("\n");
console.log("FORMAS DE DECLARAR VARIAVEIS");
//let - Usado para declarar a variavel, serve para que a variavel
//      exista somente no bloco que a mesma for declarada, o proc. saindo do
//      bloco, elá não existirá mais!
//const - Usado para declarar variaveis constante
var varOlaMundo = "Olá Mundo - Var!";
let letOlaMundo = "Olá Mundo - Let!";
const constOlaMundo = "Olá Mundo - Constante!";
console.log(varOlaMundo);
console.log(letOlaMundo);
console.log(constOlaMundo);

//##################
//Tipos de iguais
console.log("\n");
console.log("TIPOS DE IGUAIS");
let a = 10;
const b = "10";
console.log("1", a == b); //verifica apenas se o valor é igual
console.log("2", a === b);//verifica se o valor e o tipo de varivel é igual 
console.log("3", a != b);//valor diferente
console.log("4", a !== b);//valor ou tipo diferente
console.log("5", a == b && typeof a == 'string');//operador E
console.log("6", a == b || typeof a == 'string');//operador OU

//###############
// IF
console.log("\n");
console.log("IF - SINALEIRO");
let cor = "verde";
if (cor == "verde"){
    console.log("siga");
}else if (cor == "amarelo"){
    console.log("atenção");
}else if (cor == "vermelho"){
    console.log("pare");
}

//#############
console.log("\n");
console.log("SWITCH - SINALEIRO");

switch (cor) {
    case "verde":
        console.log("Siga");
        break;
    case "amarelo":
        console.log("Atenção");
        break;    
    case "vermelho":
        console.log("Pare");
        break;
}

//#############
console.log("\n");
console.log("FOR COM BREAK");
let n = 5;
for(let i = 0; i < 10; i++){
    console.log(`${i} X ${n} = ${i*n}`);
    if(i*n > 20){
        console.log(`${i*n} é maior que 20 então pare com break!`);
        break;
    }
};

//#############
console.log("\n");
console.log("FUNÇÕES - FUNCTION");
function calc(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`);
}
let resultadoSoma = calc(10,10,'+');
console.log(`Resultado da soma com function com nome: ${resultadoSoma}`);

console.log(`Resultado da soma com function anónima: ${
    (function(x1, x2, operator){
        return eval(`${x1} ${operator} ${x2}`);
    })(1,2,'+')
}`);

//############# 2018-11-25 - 21:30
console.log("\n\n");
console.log("Função - Arrow Functions");
let calcArrowFunction = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
}
console.log(`Resultado = ${calcArrowFunction(1,2,'+')}`);

//############
console.log("\n\n");
console.log("Eventos");
window.addEventListener('focus', event => {
    console.log("focus");
});

document.addEventListener('click', event => {
    console.log("click");
});

//############
console.log("\n\n");
console.log("Eventos - com Data");
let dataAtual = new Date();
console.log(dataAtual);
console.log(`Dia: ${dataAtual.getDate()}`);
console.log(`Mês: ${dataAtual.getMonth()} lembrando que mês começa em 00`);
console.log(`Ano: ${dataAtual.getFullYear()}`);
console.log(`Data no formato local (Brasil): ${dataAtual.toLocaleDateString("pt-BR")}`);

//############
console.log("\n\n");
console.log("ARRAY");
let carros = ["Palio 1998", "Toro 2000", "Uno 2018", 10, true, new Date(), function(){}];
console.log(`Array: ${carros}`);
console.log(`Array - Tamanho: ${carros.length}`);
console.log(`Array - Posição 2: ${carros[2]}`);
console.log(`Array - Posição 5 (Data completa): ${carros[5]}`);
console.log(`Array - Posição 5 (Data dia): ${carros[5].getDate()}`);

//############
console.log("\n\n");
console.log("ARRAY com ForEach");
carros.forEach(function(value, index){
    console.log(index, value);
});

//############
console.log("\n\n");
console.log("ARRAY - Exemplo - Testando functions no array");
let numeros = [10, 20, 30, 40, 
    function(numArray){
        let somaNumeros = 0;
        numArray.forEach(function(value){
            if (typeof value == 'number'){
                somaNumeros = somaNumeros + value;
            }
         })
         return somaNumeros;
    }    
];

numeros.forEach(function(value, index){
    console.log(`Números: ${index} ${value}`);
});
console.log(`Resultado da funcção: ${numeros[4](numeros)}`);

//############
console.log("\n\n");
console.log("Orientação a Objetos");
console.log("Exemplo 1 - Celular padrão");
let celular = function(){
    this.cor = "prata";
    this.ligar = function(){
        console.log("uma ligação!")
        return "ligando";
    }
}
let objeto = new celular();
console.log(objeto);
console.log(objeto.cor);
console.log(objeto.ligar());

console.log("Exemplo 2 - (Nova forma) Celular com classe (OO) ");
class classCelular{
    constructor(){
        this.cor = "vermelho";
    }

    ligar(){
        console.log("uma ligação!")
        return "ligando";
    }
}
let objetoCelular = new classCelular();
console.log(objetoCelular);
console.log(objetoCelular.cor);
console.log(objetoCelular.ligar());