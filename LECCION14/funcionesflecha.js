function miFuncion(){
     console.log('Saludos desde mi funcion');
}

miFuncion();

let mifuncion = function(){
    console.log('Hola esta es una funcion anonima');
}
mifuncion();

// con funciones flecha no se aplica el concepto de hoisting
let miFuncionFlecha = ()=>{
    console.log('Hola desde mi funcion flecha');
}
miFuncionFlecha();

const funcionFlecha =()=> 'Hola desde mi funcion flecha simplificado';

console.log(funcionFlecha());

// Cuando queremos retornar un objeto desde una funcion flecha
const regresaObjeto = () => ({nombre:'Paco', apellido: 'garcia'});// si queremos retornar un objeto desde una funcion flecha usando una sola linea tenemos que envolverlo en parentesis.
console.log(regresaObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje);// no se imprime aqui pero si en la consola
funcionConParametros('saludos con parametros');

const suma = (op1,op2) => op1 + op2;

console.log(suma(3,5));

// probando

// let sumatoria = () =>{
//     let resultado = 0;
//     for(let i = 0; i < arguments.length; i++){// aqui no sirve o no podemos hacer uso de la propiedad "arguments"
//         resultado += arguments[i];
//     }
//     return resultado;
// }
function sumatoria(){
    let resultado = 0;
    for(let i = 0 ; i< arguments.length; i++){
        resultado += arguments[i];
    }
    return resultado;
}

let sumatoria1 = sumatoria(1,2,3,4,5);
console.log(sumatoria1);


