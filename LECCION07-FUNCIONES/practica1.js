// 
function hola(){
    console.log('Hola, buenos dias');
}
hola();

                                                        // Funciones anonimas o funciones de TIPO EXPRESION

let holaAnonim = function(){
    console.log('Hola desde una funcion anomima o de tipo expresion')
}

// holaAnonim();
// tambien podemos asignarla a otra variable

let holaprueba = holaAnonim();// con simplemente asignarla se ejecutara la funcion y hara lo que tiene que hacer


                                                        // funcion que se INVICA A SI MISMA

(function(){
    console.log('Hola me estoy invocando a mimisma');
})();// de esta forma es como creamos funciones que se invican a si misma, estas son mas utiles cuando anidamos funciones o cuando queremos que algo se ejecute solo


//                                                      FUNCIONES ANINADAS
/**             RECURSION
 * 
 * Escuendo una funcion puede hacer referencia y llamarse a si misma, en lo siguiente no lo hago pero es para recordar
 */
function numeritos(n1){
    function multiplicar(n2){
        return n1 + n2;
    }
    return multiplicar;// como retornaremos una funcion anidad aqui no es necesario colocar los parentesis con el que sera el parametro que la funcion requiere pues este parametro sera pasado cuando se mande a llamar la funcion que contiene todas las funciones anidadas
}
let resultado = numeritos(1);
console.log(resultado);

let resultado2 = resultado(2);
console.log(resultado2);

console.log(numeritos(2)(2));//asi se pasan los parametos a la funcion principal y sus funciones aninadas


function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  fn_inside = outside(3); // Piensa en ello como: dame una función que agregue 3 a lo que sea que le des
  console.log(fn_inside);
  // eso
  result = fn_inside(5); // devuelve 8
  console.log(result);


  result1 = outside(3)(5);
  console.log(result1);

/** NOTAS
 * para hacer un uso adecuado de funciones aninadas tenemos que tener precaucion en como le pasamos las variables y como afectan el pasarlas o no a a la funcion, pues en los ejemplos anteriores no basto con pasarle el priver parametro de la funcion que contiene la segunda funcion, esto el logico porque a final de cuentas lo que se esta haciendo es retornar la segunda funcion a la cual no se le habia pasado aun un argumento, entonces hay que tener cuidado
 */





// Ejemplso varios
/** Haremos un pequenio codigo que le pasara un numero indefinido de atributos y la funcion tendra que sumarlos, por lo tanto tendran que ser numeros */

//                  ARGUMENTS

// arguments no es unarreglo como tal pero es una forma en la cual al crear una funcion se almacenan los argumentos que le pasemos a una funcion, esto es muy util en caso de que no sepamos en un principio la cantidad de valores que se le pasaran a la funcion, a continuacion un ejemplo
function sumaVarios(){
    let resultado = 0;
    for(let i = 0 ;  i < arguments.length; i++){
        resultado += arguments[i];
    }

    return resultado;
}

let sumatoria =  sumaVarios(1,2,3,4,5);
console.log(sumatoria);


/**                                                 FUNCION FLECHA
 * Una funcion flecha es una funcion de tipo expresion o anonima
 * ejemplo:
 */

let sumaFlecha = (a,b) => a + b;
console.log(sumaFlecha(1,2));