let listaPalavras = new Array()
var number = sorteioNumero();

switch(number){
    case 0:
        listaPalavras = ["ELEFANTE"];
        break
    case 1:
        listaPalavras = ["LARANJA"];
        break
    case 2:
        listaPalavras = ["FRANKENSTEIN"]
        break
    case 3:
        listaPalavras = ["BOMBEIRO"]
        break
    case 4:
        listaPalavras = ["ESCARAVELHO"]
        break
    case 5: 
        listaPalavras = ["VAMPIRO"]
        break
    case 6:
        listaPalavras = ["CUSCUZ"]
        break
    case 7:
        listaPalavras = ["BODE"]
        break
    case 8:
        listaPalavras = ["BOLA"]
        break
    case 9:
        listaPalavras = ["BONECA"]
        break
        
}


var caixaTexto = document.querySelector('input')
var letter = document.querySelector('button');
var mensagem = document.querySelector('p');

verificar(letter, listaPalavras, caixaTexto);

function sorteioNumero(){
    var number = Math.floor(Math.random()*10);
    return number;
}

function verificar(){
    for(var i = 0; i<listaPalavras.length; ++i){
        if(letter === listaPalavras.match(listaPalavras.length)){
            mensagem.textContent = "Parabens!"
            caixaTexto.textContent = listaPalavras.charCodeAt(listaPalavras.length);
        }else{
            mensagem.textContent = "Burro!"
        }
    }
}
