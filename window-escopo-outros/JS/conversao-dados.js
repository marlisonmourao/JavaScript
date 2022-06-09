 // conversão automatica
 console.log(23 + 'trinta e cinco');
 console.log(55 + '5');
 console.log(10 / '2');
 console.log('3' * '2');
 console.log('3' * {valor: 5});

 //conversão de forma explicita
 console.log(Number('23'));
 console.log(typeof Number('23'));

 var arrayDeTipos = ['Maria', '', '5.6', 1, 0, -0, null, undefined, NaN, Infinity, -Infinity, true, false, NaN, [], [1,2,'C#'], function(){return 10}];

 console.log(arrayDeTipos);

 function converteTipos(tipos){
     try { 
         for(let i = 0; i < tipos.length; i++){
             console.log('####>>>>Valor: ', tipo, '-> Tipo de dado: ', typeof tipo);
             console.log('Para String: ', String(tipo), '- Tipo ', typeof String(tipo));
             console.log('Para Number: ', Number(tipo), '- Tipo ', typeof Number(tipo));
             console.log('Para Boolean: ', Boolean(tipo), '- Tipo ', typeof Boolean(tipo));
             console.log('Para Object: ', Object(tipo), '- Tipo ', typeof Object(tipo));
             console.log('\n')
                
         }

     } catch (error) {
         console.log(error);~
         console.log(error.name);
         console.log(error.mesage);
         console.log(error.stack);
     } 
     
     console.log('\n');
 }