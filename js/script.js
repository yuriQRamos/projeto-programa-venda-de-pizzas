'use strict'

//Variáveis de soma
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;

//Variáveis de vendas
let vendaMussarela = 0;
let vendaMista = 0;
let vendaCalabresa = 0;

//Variáveis de botões
let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//Eventos
btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click', planilha, false);

//Funções

//Função de vendas
function venda(e){
    if(document.getElementById('mussarela').checked){
        somaMussarela += 1;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        vendaMussarela += 25.00;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    }
    else if(document.getElementById('mista').checked){
        somaMista += 1;
        document.getElementById('resultadoMista').innerHTML = somaMista;
        vendaMista += 25.00;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    }
    else if(document.getElementById('calabresa').checked){
        somaCalabresa += 1;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        vendaCalabresa += 25.00;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}

//Função de estorno
function estorno(e){

    if(document.getElementById('mussarela').checked){

        if(vendaMussarela == 0 || somaMussarela == 0.00){
            vendaMussarela = 0;
            somaMussarela = 0.00;
        }
        else{
            somaMussarela -= 1;
            document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
            vendaMussarela -= 25.00;
            document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
        }

    }

    else if(document.getElementById('mista').checked){

        if(vendaMista == 0 || somaMista == 0.00){
            vendaMista = 0;
            somaMista = 0.00;
        }
        else{
            somaMista -= 1;
            document.getElementById('resultadoMista').innerHTML = somaMista;
            vendaMista -= 25.00;
            document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
        }

    }

    else if(document.getElementById('calabresa').checked){

        if(vendaCalabresa == 0 || somaCalabresa == 0.00){    
            vendaCalabresa = 0;
            somaCalabresa = 0.00;
        }
        else{
            somaCalabresa -= 1;
            document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
            vendaCalabresa -= 25.00;
            document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
        }
    }
}

//Função de planiha

function planilha(e){
    TableToExcel.convert(document.getElementById('table'));
}