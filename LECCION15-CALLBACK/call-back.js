/** Una funcion  de tipo CALL BACK es una funcio que se pasa como parametro a otra funcion, y dentro de una funcion vamos a poder llamar a otra funcion*/   

function miFuncion1(){
    console.log('Mi funcion 1');
}
function miFuncion2(){
    console.log('Mi funcion 2');
}
miFuncion1();
miFuncion2();

// FUNCIon de tipo CALL BACK

function imprimir(mensaje){
    console.log(mensaje);
}

function suma(op1, op2, funcionCallBack){
    let res = op1 + op2;
    funcionCallBack('Resultado: ' + res);// mandamos como mensaje a la funcion imprimir el resultado de la operacion
}

suma(5,4,imprimir);// no es necesario colocar los parentesis de la funcio, con esto ya estamos pasando la referencia de la funcion imprimir a la funcion suma



//llamadas ASINCRONAS con uso de la funcion SET TIMEOUT
function miFuncionCallBack(){
    console.log('Saludo asincrono despues de 3 segundos');
}

setTimeout(miFuncionCallBack,3000);// como primer parametro recibe una funcion de tipo call back, el segundo parametro sera el tiempo de retraso que queramos.
// recourdemos que le esptamos pasando una funcion callback por lo tanto la funcion no lleva parentesis.

setTimeout(function(){console.log('Saludo asincrono2')}, 4000)


//usnado una funcion flecha desntro de setTimeout
setTimeout(()=> console.log('Saludo asincrono 3, despues de 6 segundos'), 6000);

/** Llamadas sincronas:
 *  Cuando las funciones se ejecutan 1 a la vez
 * 
 * 
 * 
 * Llamadas asincronas: cuando las funcioones trabajan al mismo tiempo por separado
 */

let reloj = ()=>{
    let fecha = new Date();// el objeto Fecha nos ayuda a traer la fecha, hora minuto y segundo.
    console.log(`Hora: ${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`)
}
// Con la funcion set interval podremos mandar a llamar una funcion en un intervalo de tiempo que nosotros definamos.

setInterval(reloj, 1000);
// Al pasar una funcion de tipo callback solo tenemos que colocar el nombre de la funcion, no mandarla a llamar, recordemos que el llamado se hace con los parentesis.*****

