
class Persona{
    static contadorPersonas = 0;
    constructor(idPersona, nombre, apellido, edad){
        this._idPersona =  idPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        Persona.contadorPersonas++;
        console.log(`Se ah creado la persona numero: ${Persona.contadorPersonas}`);
    }
    get idPersona(){
        return `El id de persona es: ${this._idPersona}`;
    }

    get nombre(){
        return `El nombre de la persona es: ${this._nombre}`;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return `El apellido de la persona es: ${this._apellido}`;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return `La edad de la persona es: ${this._edad}`;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return 'Sobre escribiendo el metodo toString';
    }
}

class Empleado extends Persona{
    constructor(idPersona, nombre, apellido, edad, idEmpleado, sueldo){
        super(idPersona, nombre, apellido, edad);
        this._idEmpleado = idEmpleado;
        this._sueldo =  sueldo;
    }

    get idEmpleado(){
        return `El id del empleado es: ${this._idEmpleado}`;
    }

    get sueldo(){
        return `El sueldo del empleado es: ${this._sueldo}`;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + 'Sobreescrito en una clase hija';
    }
}


class Cliente extends Persona{
    constructor(idPersona, nombre, apellido, edad, idCliente, fechaRegistro){
        super(idPersona, nombre, apellido, edad);
        this._idCliente = idCliente;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return `El id del cliente es: ${this._idCliente}`;
    }
    get fechaRegistro(){
        return `El registro del cliente fue: ${this._fechaRegistro}`;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString() + 'Sobre escrito en la clase hija persona';
    }
}

let cliente1 = new Cliente(1,'Paco', 'Garcia', '23 anios', 1, '2 de sep' );
console.log(cliente1.idCliente);
console.log(cliente1.fechaRegistro);
cliente1.fechaRegistro = '4  de mayo de 2022';
console.log(cliente1.fechaRegistro);
console.log(cliente1.toString());
console.log(cliente1.idPersona);


let empleado1 = new Empleado(1, 'Karen', 'Garcia', 26,11, '$10,000' );

console.log(empleado1.idPersona);
console.log(empleado1.nombre);
console.log(empleado1.sueldo);
empleado1.sueldo =  '$15,000';
console.log(empleado1.sueldo);

console.log(Persona.contadorPersonas);

