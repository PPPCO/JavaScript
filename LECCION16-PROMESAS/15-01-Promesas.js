/**
 *          PROMESAS
 * 
 * Una promesa es un codigo que tiene varios estados, podremos lanzar una peticion para procesar un codigo en dado caso de que la promesa se haya resuelto correctamente, en caso de que hayamos tenido problemas entonces se mandara a llamar el caso de rejected, o caso de rechazo de la promesa.
 * Lo podemos ver como dos caminos, uno donde la promesa se ejecuto correctamente, y otro en el cual pudmimos aber tenido un error.
 * Mientras la promesa no haya terminado de ejecutar su codigo, se enecuentra en estado de pendiente, una vez que haya terminado de ejecutar el codigo puede pasara a uno de los 2 estaos, ya sea resuelto o rechazado.
 * Para procesar el codigo cuando sera resuelta una promesa vamos autilizar la la funcion de then y para procesar la promesa en caso de que tengamos un error vamos a procesarlo con la funcion de catch.
 */

let miPromesa =  new Promise((resolved, rejected) => {
    // aqui estamos primero declarando la promesa y luego utilizandola
    let expresion = true;

    if(expresion){
        resolved('Resolvio correcto');// mandamos a llamar la funcion resolved, y le pasamos los parametos que queremos que tenga cuando se ejecute, en caso de que se cumpla la condicion del if. Con la creacon de la promesa y esto, es como si declaramos una clase y crearamos un objeto de la clase.
    }else{
        rejected('Se produjo un error');
    }
});

/** si lo hacemos de la sieguiente forma tenedremos que seleccionarl el objeto 'miPersona' y acceder a la funcion de la clase Promise a la que pertenece el objeto, la funcion a la que accederemos sera la de 'then', a esta funcion podemos pasarle dos parametros, el primero sera el parametro que usara en caso de que la promesa se haya resuelto correctamente, y el segundo parametro se usara en caso de que la promesa haya fallado o no se haya resuelto, sin embargo si le pasamos solo uno, tendremos que tambien acceder a la funcion 'catch' y pasarle ahi como parametro la funcion que queremos que realice en caso de que haya fallado y entre el catch, en lo personal me gusta mas asi, con then y catch por separado. */

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

miPromesa
.then( valor => console.log(valor))// caso de resuelto
.catch(error => console.log(error));// caso de rechazado




//                      FUNCION SETTIMEOUT y PROMESAS

let persona = new Promise( resolved =>{
    // console.log('Inicio de la promesa');
    setTimeout( ()=> resolved('saludos con promesa y timeout'), 3000);
    // console.log('Finde la promesa');
});

// persona.then( valor =>  console.log(valor));


//                                  palabra ASYNC *****************************************

// nos va a permitir facilitar el uso de promesas, y al poner la palabra async antes de la definicion de un metodo significa que ese metodo esta obligado a regresar una promesa.

async function myFuncionConpreomsa(){
    return 'Saludos con promesa y async';
}
// myFuncionConpreomsa().then(valor => console.log(valor));

// en la anterior es una funcion normal por eso si usamos los parentesis, en las otras o bueno las ateriores etabamos creando objetos que accedian a una funcion atributo de la clase bajo la que estaban hechas.

//                                        palabra AWAIT***************************************

/** Juntoa a la palabra async nos van a facilitar el  uso de promesas
 * La palabra AWAIT va a  esperar el resultado de una promesa, de esta manera vamos a simplificar el llamado de una promesa, ya no tendremos que usar la la parte de then y catch. simplemente con la palabara await vamos a esperar el resultado y podremos trabajar con el resultado.
 */

//Ejemplo de sync con await

async function funcionConPromesayAwait(){
    let miPromesa=  new Promise( resolved => resolved('Promesa con await'));

    console.log(await miPromesa);
    
}

// funcionConPromesayAwait();


// promesas, await, async y la funcion setTimeOut

async function funcionConPromesaAwaityTimeOut(){
    console.log('Inicio de funcion');
    
    let miPromesa = new Promise(resolved => setTimeout(()=>resolved('Promesa con await y time out') , 3000 ));

    console.log(await miPromesa);
    
    // el suguiente  clg no se imprimira hasta que se procese la promesa de await, ya que estamos esperando por el resultado
    
    console.log('Fin de la funcion');
    
}

funcionConPromesaAwaityTimeOut();