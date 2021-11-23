// FUNÇÃO SEM PARAMETROS E SEM RETORNO
function teste01(){
    console.log('BOM DIA!');
}

// FUNÇÃO SEM PARAMENTROS E COM RETORNO
//function teste02(){
 //   var frase = "BOM TARDE!";
//    return frase;
//}

//var resultado =  teste02

// FUNÇÃO COM PARAMETRO E SEM RETORNO
//function muda_texto(valor){
//    document.getElementById("paragrafo").innerHTML = valor;
//}

//var resultado = teste02;
//muda_texto(resultado);

// FUNÇÃO COM PARAMENTRO E COM RETORNO
var num1 = 10;
var num2 = 20;

function soma(num1,num2){
    var soma = num1 + num2;
    return soma;
}

var total = soma(num1,num2);
console.log('A soma é: ' +total);