var regexpLiteral = /JS/;  // Literal
var regexpConstrutor = new RegExp('Jedi'); // Construtor

let stringCurso = 'Formaçaõ Completa JavaScript - Mestre JS Jedi'

console.log(regexpLiteral.test(stringCurso));
console.log(regexpConstrutor.exec(stringCurso));