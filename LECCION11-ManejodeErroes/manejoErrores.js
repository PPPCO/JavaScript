'use strict'
/**
 * El bloque  try ejecutara lo que sea que coloquemos dentro, si hay un error lo recibira el bloque catch, en base al error o a lo que nos mande, podremos tomar acciones que queramos como cuando hacemos peticiones a un servidor y nos regresa un error, dependiendo del error podremos hacer algo o z cosa.
 * El bloque finally, siempre se ejecutara sin importar que en try haya un error o no.
 */
try{
    let x = 10;
    // miFuncion();
    throw 'mi error';
}
catch(error){// catch recibira como parametro el error en caso de aber en el bloque try
    console.log(error);
}
finally{
    // este bloque siempre se va a ejecutar, asi tengamos un error o no
    console.log('Termina la revision de errores');
}
console.log('Continuamos...');

// el uso de try-catch es util pues nos ayuda a que nuestro programa no se detenga por errores que puedamos tener en lo que metamos en ese bloque.

//                              CLAUSULA THROWS

// Sirve para que nosotros arrojemos nuestros popios errores o excepciones.

let resultado ='';
try{
    // x =10;
    if(isNaN(resultado)) throw 'El texto no es un numero';
    else if(resultado == '') throw 'Es cadena vaia';
}catch(error){
    console.log(error);
    //  el error que recibamos tiene tanto nombre como un mensaje
    // console.log(error.name);
    // console.log(error.message);
} finally{
    console.log('Termina revision de errores');
}