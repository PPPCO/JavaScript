class DispositivosEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(entrada){
        this._tipoEntrada =  entrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca =  marca;
    }
}

class Raton extends DispositivosEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString(){
        return `idRaton: ${this._idRaton}, tipoEntrada: ${super.tipoEntrada}, marca: ${super.marca}.`
    }
}

class Teclado extends DispositivosEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    toString(){
        return `idTeclado: ${this._idTeclado}, tipoEntrada: ${super.tipoEntrada}, marca: ${super.marca}.`
    }
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca =  marca;
        this._tamanio = tamanio;
    }
    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca =  marca;
    }

    get tamanio(){
        return this._tamanio;
    }

    set tamanio(tamanio){
        this._tamanio = tamanio;
    }

    toString(){
        return `idMonitor: ${this._idMonitor}, marca: ${this.marca}, tamaño: ${this.tamanio}.`;
    }
}

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadoras = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this._monitor;
    }

    set monitor(monitor){
        this._monitor = monitor;
    }

    get teclado(){
        return this._teclado;
    }

    set teclado(teclado){
        this._teclado = teclado;
    }

    get raton(){
        return this._raton;
    }

    set raton(raton){
        this._raton = raton;
    }

    toString(){
        return `Computadora: ${this._idComputadoras}: ${this._nombre}\n   monitor: [${this._monitor}]\n   teclado: [${this._teclado}}\n   raton: [${this._raton}]`
    }
}

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadora = [];
    }

    agregarComputadora(computadora){
        this._computadora.push(computadora);
    }

    mostrarOrden(){
        let impresion = '';
        let contadorComputadora = 0;
        for(let atributo of this._computadora){
            impresion += `\n ${atributo.toString()}`;
            contadorComputadora += 1;
        }
        return  `\n Orden: ${this._idOrden}, Computadoras: ${impresion}
        `;
    }
}

let raton1 = new Raton("USB", "Razer");
console.log(raton1.toString());
let raton2 = new Raton('USB', 'HP');
console.log(raton2.toString());

let teclado1 = new Teclado('USB', 'Dell');
let teclado2 = new Teclado('BlueTooth', 'Dell');
console.log(teclado1.toString());
console.log(teclado2.toString());

let monitor1 =  new Monitor('HP','27 pulgadas');
let monitor2 =  new Monitor('Aceer','24 pulgadas');
console.log(monitor1.toString());
console.log(monitor2.toString());

let computadora1 = new Computadora('LEGION',monitor1, teclado1, raton1);
let computadora2 = new Computadora('PREDATOR',monitor2, teclado2, raton2);
console.log(computadora1.toString());
console.log(computadora2.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
console.log(orden1.mostrarOrden());

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora2);
console.log(orden2.mostrarOrden());