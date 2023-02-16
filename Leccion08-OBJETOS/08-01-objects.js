/**
 * un objeto puede tener propiedades y metodos
 */
//definir un nuevo objeto
let persona = {
    nombre: 'PACO',
    apellido:'Garcia',
    emai:'paco@gmail.com',
    edad: 24,

}
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(`El nombre de la persona es ${persona.nombre} ${persona.apellido} y tiene  ${persona.edad} anios de edad`);
console.log(persona);



/** 
 * Agregar METODOS A NUESTRO OBJETO
 * 
 */

let persona2 = {
    nombre: 'PACO',
    apellido:'Garcia',
    emai:'paco@gmail.com',
    edad: 24,
    nombreCompleto: function(){// estamos declarando la funcion como si fuera de tipo expresion
        return this.nombre + ' ' + this.apellido;// para acceder a una propiedad desde una funcion que forma parte del objetom, tanto la propiedad
        // como la funcion tenemos que hacer uso de la palabra THIS
    },
    nombreCompleto2: function(){
        return `El nombre completo es ${this.nombre} ${this.apellido}`
    },

}

console.log(persona2.nombreCompleto());
// El uso de los parentesis en el llamado de la funcion es esencial
console.log(persona2.nombreCompleto2());













/**
 * -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 *              PRUEBAS
 * 
 */
let objectPruebas={
    data:{
        name:'Paco',
        apellido: 'Garcia',
        nTelefonico: '1122334455',
        gmail: 'paco@gmail.com',
        edad: 24
    },
    inicio:(function(){
        let th= this;
        console.log('Hola');
        // th.desplegadoSaludo();
    })(),
    perdirNombre: function(){
        return `Hola mi nombre es: ${this.data.name} ${this.data.apellido}`;
    },
    desplegadoSaludo: function(){
        console.log('Hola buenos dias');
    }

}
let nombrePrueba = objectPruebas.perdirNombre();
console.log(nombrePrueba);

let objetoPruebas=[{
    message:'Hola que hace',
    "data":{
        name:'Paco',
        apellido:'Garcia',
        nTelefonico: '1122334455',
        gmail: 'paco@gmail.com',
        edad: 24,
        extra_date:{
            arreglo:[1,2,3,4,5,10,20,30],
            date:'22/12/22'
        }
    },
    response:{
        id:1,
        CALLE:'Emiliano Zapata',
        LOTE:2
    }
}];
console.log(objetoPruebas[0].data.extra_date.arreglo[5]);

let FinalPruebas={
    date:'',
    hour:'',
    // mounted:(function(){
    //     this.date = new Date();
    //     console.log(this.date)
    //     // th.gate_date();
    // })(),
    get_date: function(){
        let date = new Date();
        this.date = date;
    },
    saludar: function(){
        this.get_date();
        console.log(`Hola hoy es: ${this.date}`);
    },
    get unHola(){
        console.log('Hola que hace');
    }
}
FinalPruebas.unHola;
// FinalPruebas.gate_date();
FinalPruebas.saludar();