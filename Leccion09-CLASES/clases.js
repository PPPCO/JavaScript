// Una clase es una plantilla, se definiran los atributos o metodos que queremos que tengan nuestras variables.
// Una clase tendra: un nombre, atributos, y metodos, esos tres elementos.
// Los objetos estan dise;ados para que cada objeto contenga sus propios valores, las clases si pueden tener una valor que se comparta.

// sitanxys para definir una clase

class Persona{

    // declarando variables estaticas, con esto estamos creando variables que pertenecen a la clase no a los objetos que se crean usando la clase, pasa algo muy parecido a las funciones o metodos estaticos.
    static contadorObjetosPersona = 0;// atributos de nuestra clase
    email = 'Valor default email';// atriburo de nuestros objetos
    // los atriburos definidos como static se asocian a la clase, los no definidos con static se asocian con los objetos definidos partir de la plantilla de la clase.


    constructor(nombre, apellido ){
        // En el constructor se le pueden pasar parametros
        this._nombre = nombre;
        this._apellido = apellido;

        //  como queremos acceder a la variable estatica de la clase, no haremos uso de la palabra reservada 'this', SI NO  que haremos uso del nombre de la clase para referenciarla, me imagino que esto no solo es por sintaxis sino que tambien por logica, ya que recordemos que this en el caso de los objetos se usa para hacer referencia las variables del objeto, aqui etamos haciendo al parecido a la hora de crear el constructor, pues este es un objeto por lo tanto me imagino que hacer uso de this cuando creamos las variables, sin embargo en el caso de las variables estaticas de la case, que inclusive estan fuera del constructor vemos que ahi no usamos this, y para accerder a ella tenemos que hacer uso del nombre de la misma clase para referenciarla y poder usarla, estudiar mas a fondo esto.
        Persona.contadorObjetosPersona ++;
        console.log('Se incrementa el contador: ' + Persona.contadorObjetosPersona)
    }

    get nombre(){ // para recuperar informacion
        return this._nombre;   
    }
    set nombre( nombre ){// para modificar el valor del nombre
        this._nombre = nombre; 
    }

    get apellido(){ // para recuperar informacion
        return this._apellido;   
    }
    set apellido( apellido ){// para modificar el valor del nombre
        this._apellido = apellido; 
    }
    
    nombreCompleto(){
        return  `${this._nombre} ${this._apellido}.`;
    }

    // sobre escribiendo un metodo de la clase padre, recordemos que todas las clases tienen como objeto padre la clase Oject
    toString(){
        // se aplica POLIMORFISMO EN ESTA LLAMADA
        // POLIMORFISO - multiples formas en tiempo de ejecucion, una misma funcion puede ser llamada al mismo tiempo con diferentes comportamientos dependiendo de la clase en que fue sobreescrita o llamada
        // El metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo.
        return  this.nombreCompleto();
    }


    // ----------------------palabra STATIC

    static saludar(){
        console.log('Saludos desde este metodo static');
    }

    static saluda2(persona){
        console.log('Hola ' + persona.nombre + ' ' + persona.apellido);//vemos que la funcion recibe un parametro, este parametro es un objeto y podemos acceder a sus elementos
    }
}

// ejemplo de HERENCIA

class Empleado extends Persona{
    constructor( nombre, apellido, departamento ){
        super(nombre, apellido);// llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento( departamento){
        this._departamento = departamento;
    }

    // aplicando el condepto de SOBREESCRITURA- modificar el comportamiento de un metodo definido en la clase padre
    nombreCompleto(){
        return  super.nombreCompleto() + ` y se encuentra en el departamento de ${this._departamento}.`;
        // cuando sobre escribimos una funcion de una clase padre podemos simplemente hacer uso del mismo nombre de la funcion presente en la case padre y cambiarla por completo, o hacer uso de 'super.function()' para traer lo que sea que la funcion presente en la clase padre haga y concatenarlo al resultado de nuesta funcion, sin embargo  es cosa de ver con exacctitud lo que queremos hacer para evitar problemas, en lo personal esto es interesante, pero lo veo quiza algo poco practico crep es muy situacional.
    }
}




let persona1 = new Persona('Paco','Garcia');
console.log(persona1);

let persona2 = new Persona('Carlos','De lara');
console.log(persona2);


console.log(persona1.nombre);

// ACCEdiendo a un metodo con SET
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);

// CREANDO UN OBJETO USANDO UNA CLASE HIJA

let empleado1 = new Empleado('Karen','Garcia', 'Departamento 1');
console.log(empleado1);

console.log(empleado1.nombre);
console.log(empleado1.departamento); // haciendo uso de una funcion get para recuperar el nombre del departamento

empleado1.departamento = 'Sistemas'; // haciendo uso de una funcion set para cambio de departamento
console.log(empleado1.departamento);


console.log(empleado1.nombreCompleto());


console.log(empleado1.toString());
// en la linea anterior estamos haciendo uso de una funcion normal sin GET o SET. Ademas estamos haciendo uso de una funcion creada en la clase padre, pero recordemos que esta variable de "empleado1" fue creada bajo una clase hija.





// tratanto de usar nuestro metodo estatico
// persona1.saludar();
// NO ES POSIBLE USAR UNA FUNCION ESTTICA DESDE UN OBJETO CREADO BAJO LA CLASE QUE TIENE EL METODO ESTATICO

Persona.saludar();// si podemos ejecutar el metodo estico usando la clase, ademas PODEMOS PASAR COMO ARGUMENTO UN OBJETO a un metodo ESTATICO
Persona.saluda2(persona2);// estamos pasando un objeto como argumento a una funcion estatica dentro de una clase.

Empleado.saluda2(empleado1); // como vemos tambien el metodo estico se relaciona y puede ser usado desde la clase hija 


console.log(Persona.contadorObjetosPersona);
// con lo anterior estamos imprimiendo un variable estatica de una clase, para ello tenemos que hacer uso de la clase, no de un objeto que haya sido creado bajo la clase que contiene la variable estatica, pasa lo mismo que con los metodos esticos, solo podemos hacer uso de estos elementos usando la clase, no objetos.
console.log(Empleado.contadorObjetosPersona);
// las clases hijas tambien heredan variables estaticas

console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
// Con lo anterior podemos observar que las variables no estaticas solo se podran acceder desde objetos creados a partir de la clase, usar la clase para acceder a una variable no estatica no sera posible.



/** GET y SET
 *  
 * Estos son funciones que nos permite trabajar con atributos de nuestra clase get nos servira para crear una funcion que nos permita recuperar informaicon de nuestra clase sin tener que usar parentesis cuando hagamos uso de dicha funcion.
 * SET por otro lado nos ayuda a modificar atributos presentes en nuestra clase para ello tambien no tendremos que hacer uso de una funcion con parentesis y pasarle como parametro el nuevo valor que queremos para el elemento creado con la clase, normal mente se veria algo asi: obj.function('name');
 * sin embargo con set lo que aremos sera: obj.nombre = 'name'; lo cual es una mejor practica pues es mas facil de entender lo que se esta haciendo. 
 * 
*/

/** HOISTING
 * 
 * El hoisting si no mal recuerdo es que cuando nosotros creamos una funcion y ejecutemos nuestro codigo lo que sucedera con la funcion es que esta automaticamente se movera al inicio de nuestro codigo para que podamos hacer llamdo de esta sin proble alguno, ya que en ocasiones sucede que creamos la funcion lineas mas abajo de donde la queremos usar, sin embargo este concepto de hoisting no se aplica con las clases, por lo tanto CUANDO ESTEMOS TRABAJANDO CON CLASES tenemos que PRIMERO CREAR LA CLASE ANTES DE TRATAR DE CREAR OBJETOS PERTENECIENTES A LA CLASE DE LA CUAL QUEREMOS HACER USO, ya que aunque tratemos esto no nos sera posible y nos arrojara errores.
 */

/**         HERENCIA
 * Nos permitira reciclar codigo de una clase PADRE a una clase HIJA.
 * 
 */

/** SOBRE ESCRITURA EN JAVA SRCIPT
 * 
 * Desde una clase hija vamos a modificar el comportamiento definido en el metodo de la clase padre. Esto puede ser por x razon pero eneste ejemplo quie abordamos para aprender es porque la funcion no esta completa con toda la informacion ya que en la clase hija tambien tenemos la informacion del departamento y queremos agregarla si necesidad de crear otra funcion.
 */

// POLIMORFISMO
/** Tiene que ver con el llamado de metodos dependiendo del objeto al que estemos apuntando, ya sea que el objeto haya sido creado con una clase padre o con una clase hija, el polimorfismo lo que hace es que hara un llamado al metodo pero siempre partiendo del objeto bajo el que el fue creado. ALGO ASI.  */

// ----------------------------PALABRA STATIC-------------------
/** Un metodo estatico se asocia con una clase pero no con los objetos, osea que los objetos que sean creados usando una clase con metodos estaticos no podran hacer uso de estos metodos ya que estos solo son para la clase */



class Operaciones{
    constructor(numero1, numero2, numero3){
        this._numero1 = numero1;
        this._numero2 = numero2;
        this._numero3 = numero3;
    }
    get suma(){
        return this._numero1 + this._numero2 + this._numero3;
    }
//         Tenemos que declarar una funcion que no sea get o set de la siguiente manera.
    multiplicar(){
        return this._numero1 * this._numero2 * this._numero3;
    }
}

let op1 = new Operaciones(1,2,3);
console.log(op1.suma);
console.log(op1.multiplicar());


class MasOp extends Operaciones{
    constructor(numero1, numero2, numero3, numero4){
        super(numero1,numero2,numero3);
        this._numero4 = numero4;
    }
    get numeros(){
        return super.suma + this._numero4;
    }

}
let op2 =  new MasOp(4,5,6,7);
console.log(op2.numeros);
console.log(op2.multiplicar());

/** tambien tenemos lo de atributos y metodos estaticos pero si si me quedo claro. */

