start()
var resultado = '';
var unidade = '';
var dezena = '';
var dezena10 = '';
var centena = '';
function start(){
  var range = document.querySelector('#range');
  var numero = document.querySelector('#numero');
  var texto = document.querySelector('#texto');
  range.addEventListener('input',atualizaNumero);
}
function atualizaNumero(event){
  var valor = event.target.value;
  numero.value = valor;
  resultado = '';
  porExtenso(valor);
}
function porExtenso(valor){
  if(valor.length===1){
    resultado = Unidade(valor);
  }
  if(valor.length===2){
    resultado = Dezena(valor);
  }
  if(valor.length===3){
    resultado = Centena(valor);
  }
  texto.value = resultado;
}
function Unidade(valor){
  unidade = '';
  switch(valor){
    case '0': unidade += 'zero';break;
    case '1': unidade += 'um';break;
    case '2': unidade += 'dois';break;
    case '3': unidade += 'três';break;
    case '4': unidade += 'quatro';break;
    case '5': unidade += 'cinco';break;
    case '6': unidade += 'seis';break;
    case '7': unidade += 'sete';break;
    case '8': unidade += 'oito';break;
    case '9': unidade += 'nove';break;
  }
  return unidade;
}
function Dezena(valor){
  if(valor[0]==='1'){
    return Dezena10(valor);
  }else{
    dezena = '';
    switch(valor[0]){
      case '2': dezena += 'vinte';break;
      case '3': dezena += 'trinta';break;
      case '4': dezena += 'quarenta';break;
      case '5': dezena += 'cinquenta';break;
      case '6': dezena += 'sessenta';break;
      case '7': dezena += 'setenta';break;
      case '8': dezena += 'oitenta';break;
      case '9': dezena += 'noventa';break;
    }
    if(valor[1]!=='0'){
      dezena += ' e ' + Unidade(valor[1]);
    }
    return dezena;
  }
}
function Dezena10(valor){
  dezena10 = '';
  switch(valor){
    case '10': dezena10 += 'dez';break;
    case '11': dezena10 += 'onze';break;
    case '12': dezena10 += 'doze';break;
    case '13': dezena10 += 'treze';break;
    case '14': dezena10 += 'quatorze';break;
    case '15': dezena10 += 'quinze';break;
    case '16': dezena10 += 'dezesseis';break;
    case '17': dezena10 += 'dezesete';break;
    case '18': dezena10 += 'dezoito';break;
    case '19': dezena10 += 'dezenove';break;
  }
  return dezena10;
}
function Centena(valor){
  centena = '';
  if(valor==='100'){
    centena = 'cem';
    return centena;
  }
  switch(valor[0]){
    case '1': centena += 'cento';break;
    case '2': centena += 'duzentos';break;
    case '3': centena += 'trezentos';break;
    case '4': centena += 'quatrocentos';break;
    case '5': centena += 'quinhentos';break;
    case '6': centena += 'seissentos';break;
    case '7': centena += 'setecentos';break;
    case '8': centena += 'oitocentos';break;
    case '9': centena += 'novecentos';break;
  }
  if(valor.slice(1)==='00'){
    return centena;
  }
  centena += ' e ';
  if(valor[1]==='0'){
    centena += Unidade(valor.slice(2))
    return centena;
  }else{
    centena += Dezena(valor.slice(1));
    return centena;
  }
}