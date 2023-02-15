
//                                                              OBJETOS Y PROPIEDADES

// Se crean y asignan cuatro variables de una sola vez,
// separadas por comas
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type                 = 'Sintaxis de puntos';
myObj['fecha de creación'] = 'Cadena con espacios';
myObj[str]                 = 'Valor de cadena';
myObj[rand]                = 'Número aleatorio';
myObj[obj]                 = 'Object';
myObj['']                  = 'Incluso una cadena vacía';

console.log(myObj);




//                                                          CREACION DE OBJETOS EN JAVASCRIPT *******************************



let persona2 = new Object();// le estamos indicando a js que cree un espacio de memoria para este objeto, pero no tiene propiedades ni metodos

//  agregar atributos al objeto anterior
persona2.nombre = "Paco";
persona2.direccion = "20 de Nov";
persona2.telefono = 11223344;

console.log(persona2.nombre);// accediendo a una propiedad y imprimiendola
console.log(persona2['nombre']);
// Con lo anterior estamos accediendo a una propiedad como si fuera un arreglo, tenemos que recordar que la propiedad sera un string





/**   ***********              RECORREIENDO TODAS LA PROPIEDADES DE NUESTRO OBJETO  
 * 
 * 
 * PARA ello tenemos que hacer uso de un for in
 * IMPORTANTE
 * para visualizar el objeto y contenido en la consola del navegador lo haremos de esta forma porque de otra forma  nos dejara
*/
for(let nombre_propiedad in persona2){
    console.log(nombre_propiedad);
    console.log(`${nombre_propiedad}: ${persona2[nombre_propiedad]}`);
}


/**                                     AGREGAR O ELIMINAR PROPIEDADES A UN OBJETO ******************************* */

persona2.calle = "Emiliano zapata";

for(let nombre_propiedad in persona2){
    console.log(nombre_propiedad);
    console.log(`${nombre_propiedad}: ${persona2[nombre_propiedad]}`);
}
// con lo anterior vemos que si se agrego la propiedad de calle

// ELIMINAR UNA PROPIEDAD
delete persona2.calle;

for( let nombre_propiedad in persona2){
    console.log(`${nombre_propiedad}: ${persona2[nombre_propiedad]}`);
}
// vemos que si se elimino el atributo calle del objeto persona2





/**                                                             FORMAS DE IMPRIMIR UN OBJETO **************************** */

// Concatenar cada valor de de cada propiedad
console.log(persona2.nombre + ' ' + persona2.direccion + ' + n elementos');

// for in
for(elemtos_objeto in persona2){
    console.log(`${elemtos_objeto}: ${persona2[elemtos_objeto]}`);   
}

// Usando la siguiente sintaxis, Nos los imprimiera como un arreglo, bueno nos creara un arreglo con los valores de nuestro objeto

let persona2Array = Object.values(persona2);
console.log(persona2Array);

// Conviertiendo a un JSON  y los valores seran devueltos en una cadena
let personaString = JSON.stringify(persona2);//convierte el objeto en una cadena
console.log(personaString);


/**                                              METODOS GET Y SET****************************************
 * Estos metodos o bueno usar estos metodos son las mejores practicas para acceder y modificar los valore y propiedades de nuestros objetos
*/

let persona = {
    nombre: 'Paco',
    apellido: 'Garcia',
    email: 'paco@gmail.com',
    edad: 24,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(idioma){
        this.idioma = idioma;
    },
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido} y su correo es: ${this.email}`;
    },
    //declarando una funcion get
    get nombreComp(){
        return `${this.nombre} ${this.apellido} y su correo es: ${this.email}`;
    },

}
console.log(persona.nombreCompleto());// llamando una funcion sin usat get o set
console.log(persona.nombreComp);// llamando una funcion get
console.log(persona.lang);

// Haciendo uso de una funcion set presente en un objeto
persona.lang = 'eu';// vemos que el uso de una funcion set es muy diferente a lo que teniamos acostumbrado
console.log(persona.idioma);
console.log(persona.lang);


//                                          METODO CONSTRUCTOR DE OBJETOS ******************************************
/** Una funcion contstructor es una funcion especial que se usa de la siguiente manera, nos servira para crear varios objetos del mismo tipo */

function Persona(nombre = 'Juan', apellido = 'Garcia', email){// lo  ideal aqui es usar la primera letra en mayuscula
    this.nombre =  nombre;
    this.apellido =  apellido;
    this.email =  email;

    

    //  *********AGREGAR METODOS A UN METODO CONSTRUCTOR DE OBJETOS*****************
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Paco', 'Angles', 'p@gmail.com');//
console.log(JSON.stringify(padre));

let madre =  new Persona('Maria', 'Angles', 'm@gmail.com');
console.log(JSON.stringify(madre));

padre.nombre = 'Jose';
for(atributo in padre){
    console.log(`impreso con un for in ${atributo}: ${padre[atributo]}`);
}// imprimir objetos constructores de esta forma no es tan ideal porque creo se confunde con las funciones y como que se rompe, entonces mejor tratar de unsar JSON.stringify

for(atributo in madre){
    console.log(`${atributo}: ${madre[atributo]}`);
}

// mandando a llamar una funcion presente en un metodo constructor
console.log(padre.nombreCompleto());



//                                              DISTINTAS FORMAS DE CREAR OBJETOS EN JAVASCRIPT**********************

let miObjeto =  new Object();// esta es la forma mas formal
let miObjeto2 =  {};// la forma mas comun trabajando con js

let miCadena1 = new String('Hola');// esta es una clase prensente en js solo hago mencion...
let miCadena2 = 'Hola';// esta seria la forma mas comun, la anterior es la forma mas formal.

let miNumero =  new Number(2);// sintaxis mas formal.
let miNumero2  = 2; // sintaxis mas comun.

let miBoolean = new Boolean(false);
let miBoolean2 =  false;

let miarreglito =  new Array();
let miarreglito1 =  [];

let miFuncion = new function(){};// una funcion tambien es un objeto porque estamos haciendo uso dela palabra reservada new, bueno no solo por la simple palabra, pero me doy a entender.
let miFuncion2 = function(){}




//                                                  USO DE PROPTOTYPE *******************************************
// nos sirve para agregar una variable que querramos que se comparta entre todos los objetos creados a partir de un objeto padre

Persona.prototype.telefono = '44332211';
padre.telefono = '1223344112';
console.log(JSON.stringify(padre));

for(atributo in madre){
    console.log(`Imprimiendo con for in: ${atributo}: ${madre[atributo]}`);
}// Por alguna razon con un console log O JSON.stringify no salen las variables que agrepamos al objeto padre con propotype, pero con el for in si salen :)
console.log(madre)
console.log(madre.telefono);




//                                                       METODO CALL*********************************

/** Nos permitira llamar un metodo que esta definido en un objeto desde otro objeto.*/

let personita1 = {
    nombre: 'Paco',
    apellido: 'Garcia',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    },
    function2: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let personita2 = {
    nombre: 'Karen',
    apellido: 'Lara',
}
        // haciendo uso de CALL para usar el metodo presente en el objeto personita1 (nombreCompleto) en el objeto personita2.
console.log(personita1.nombreCompleto('Licenciado', 44332211));

console.log(personita1.nombreCompleto.call(personita2));
// tenemos que seleccionar la funcion desde el objeto donde fue creada par despues hacer uso de la funcion Call, la cual pide que se le pase como argumento el nombre de la funcion de la cual usara los datos o la funcion donde queremos que se use la funcion alojada en el otro objeto.

        // PASO DE ARGUMENTOS A CALL js
        console.log(personita1.nombreCompleto.call(personita2,'frontend dev', 112234455));
        /** para pasarle  parametros a una funcion cuando hacemos uso de call, perimero debemos de pasarle el nombre del objeto donde queremos usar la funcion alojada en el otro objeto, despues tenemos que comenzale a pasar los parametros que utilice la funcion. Podemos pasarle string, numeros, me imagino que booleanos, etc. */



//                  USANDO APPLY****************

//Este metodo nos va a permitir mandar a llamar un metodo en un obejto que no tiene denfinido cierto metodo

console.log(personita1.function2.apply(personita2));
// hasta aqui vemos que tenemos el mismo resultado que con call.


let arreglito = ['Ingeniero', 11233212]
console.log(personita1.nombreCompleto.apply(personita2,arreglito));
console.log(personita1.nombreCompleto.apply(personita2,['Docente', 121231]));
// Con lo anterior vemos que la diferencia que teiene con call es que apply pasa los argumentos pero dentro de un arreglo.
// ENTOnces, la diferencia es que apply usa un arreglo para pasar parametros a un funcion mientras que call los pasa separandolos por comas, siempre y cuando el primer parametro sea el nombre del objeto con el que queremos usar la funcion.

// NOTA* 
// lO que estamos haciendo cuando usamos call o apply es que no estamos usando una funcion que esta en un objeto en otro objeto, osea esta no es como que se traslade, lo que realmente esta pasando es que estamos usando la funcion en el objeto en que fue definida, PERO con los datos de otro objeto, eso es lo que realmente pasa.
