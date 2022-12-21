// Una funcion es un coddigo reutilizable y podemos reutilizarlo cuanto queramos

miFuncion(4,6);// dado el concepto de JOISTING podemos mandar a llamar la funcion antes de siquiera delcarar la funcion
// como se explica mas abajo.


// Declaracion de una funcion
/** Para crear una funcion debemos de hacer uso de la palabra reservada "function" y despues definir el nombre que 
 * querramos que tenga nuestra funcion.
 * 
 * PARAMETRO DE UNA FUNCION
 * Es la informacion de entrada con la puede trabajar una funcion, y estos argumentos o parametros de una funcion los definiremos
 * en los parentesis presentes en el nombre de la funcion, ademas estos argumentos son OPCIONALES, ya que PUEDE O NO tener
 * argumentos o paremetros.
 *  */ 
function miFuncion(a,b){
    // Curpo de la funcion
    console.log('Suma: ' + (a+b));
}
miFuncion(1,2);
miFuncion(2,5);

//JOISYING
/**una funcion podemos mandarla a llamar antes de definirla, esto se conoce como joisting, es decir
 *  que podemos definir nuestra funcion en cualquier parte de nuestro programa, y podremos mandar a llamar
 * ya sea, antes o despues de definirla.
 * El concepto de JOISTING lo que hace es mover la declaracion de la funcion al inicio del programa para que podamos
 * usarla en cualquier parte de nuestro programa.
 */


/**                 PALABRA RETURN
 * Sirver para retnormar el valor con el calculo que raliza una funcion
 * 
 */

function miFuncion1(a,b){
    // Curpo de la funcion
    return a+b;
}
let resultado = miFuncion1(2,3);
console.log(resultado);
/**Entonces la palabra return, regresara un valor derivado de una funcion, para ello o por lo que
 * vi en clase lo idea seria declarar una variable y asignarle el llamado de la funcion para que el valor retornado 
 * sea asignado a la variable a la que se le asigno el llamado de la funcion.
 */



/**                      FUNCIONES DE TIPO EXPRESION                 
 * 
 * Cuando trabajamos con funciones, tambien podemos asignarla a una variable , y de esta manera
 * evitar poder un nombre a una funcion, ya que se conococera como funcion de tipo expresion 
 * o funciones anonimas.
*/

//DECLARACION DE UNA FUNCION DE TIPO EXPRESION
let x = function(a, b){return(a+b);}; // aqui si deberemos terminar la funcion con puto y coma, pues es como si fuera una sola
//ekjemplo con funcion de tipo flecha
// let x = (a, b) => a+b;
//linea de codigo.

resultado = x(1,2); // usando una funcion de tipo expresion
/** para ello le tomamos una variable y le asignamos la variable a la que pertenece la funcion de tipo expresion
 * ademas le podemos pasar los elementos de esa funcion unicamente abriendo parentesis y colocandolos, como si 
 * fuese un llamado de una funcion comun.
 */
console.log(resultado);



/**                              FUNCIONES  de tipo SELF INVOKING
 * 
 * Son funciones que se mandan a llamar a si mismas.
 * 
 */

(function(a,b){
    console.log("Ejecutando la funcion " + (a+b));
})(3,4);//tambien podemos pasarle elementos.
/** Para mandar allamar este tipo de funciones solo se puede mandar a llamar una vez usando los parentetesis
 * al final como se muestra arriba, esta funcion no se puede reutilizar.
 * 
 * Puede ser util cuando queremos que se mande a llamar cuando cargue el porgrama, auqnue algunos frameworks 
 * tiene apartados como vue con mounted que nos permiten hacer llamado de funciones apenas cargue el programa.
*/




/**                                FUNCIONES COMO OBJETO
 * 
 * Una funcion es un tipo de dato.
 * una funcion tambien tambien es un objeto
 * 
 */



/**                                 FUNCIONES FLECHA EN JAVASCRIPT
 * 
 * Son similares a las funciones de tipo expresion
 */

const sumarFuncionFlecha = (a,b)=> a+b;
resultado = sumarFuncionFlecha(3,5);// mandando a llamar la funcion de tipo flecha
console.log(resultado);


//PRUEBAS
function contarNumeros(a,b){// en js tenemos que afuerza usar la palabra reservada function a emenos que sea una funcion flecha, 
    //no podemos omitir la palabra funcion como en algunos frameworks cmo vue o angular.
    console.log('La sumatoria es: ' + (a+b));
    }

contarNumeros(1,2);



/**                     PARAMETROS Y AGUMENTOS
 * Podriamos decir que un argumento y un parametro de una funcion son lo mismo
 * y es valido, sin embargo si quieremos hacer una distincion de estos podemos decir
 * que un parametro son los elementos que le asignamos a una funcion para que trbaje,
 * mientras que un argumento son las variables que le pasamos a la funcion cuando la 
 * invocamos, pues estamos argumentandole datos.
*/
let sumar = function(a=2,b=1){
    //los elementos de una funcion son un arreglo, porlo que poemos manipularlos
    // como arreglos mandandolos a llamar con la palabra reservada "arguments"
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;

}
resultado = sumar();
console.log(resultado);


//                  EJEMPLO DE SUMAR TODOS LOS ARGUMENTOS

let resultado3 = sumarTodito0(5,4,13,10,9,10,12,12,11,14);
console.log(resultado3);

function sumarTodito0(){
    let suma = 0;
    for(let i=0; i < arguments.length; i++){
        suma += arguments[i];// += es el operador de  COMPOSICION
    }
    return suma;
}




/**                 PASO POR VALOR Y PASO POR REFERENCIA
 * 
 * PASO POR VALOR
 */

let x1=10;// tipo primitivo, porque no tiene atributos ni metodos asociados a este valor
 
function cambiarVlaro(a){
    a = 20;
}

cambiarVlaro(x1);
console.log(x1);

// PASO POR REFERENCIA

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 18
}

function cambiarValorObjeto(p1,p2){/**P1 esta recibiendo la referencia de objeto por eso aqui podemos acceder al atributo nombre y por lo tanto
los cambis se verean reflejados en el objeto */
    p1.nombre = 'Carlos';
    p1.apellido ='Lara';
}
cambiarValorObjeto(persona);
console.log(persona.nombre);
console.log(persona.apellido);
// basicamente el cambio por referencia funciona solo con objetos.


