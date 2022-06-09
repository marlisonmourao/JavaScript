//whapper
var valorString = 'Curso JS Mestre Jedi';
console.log(valorString.substring(0, 5));

//Processo Wrapper
var valorStringTemp  = new String(valorString);
var substr = valorStringTemp.substring(0, 5);
valorStringTemp = null;
console.log(substr);
