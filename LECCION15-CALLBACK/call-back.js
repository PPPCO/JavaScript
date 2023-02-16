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