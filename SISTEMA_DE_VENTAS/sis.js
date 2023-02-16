class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto =++Producto.contadorProductos;// ***pude colocar un preincremente en vez de colocar abajo el pos incremento
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre =  nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){// como es un metodo estatico lo recomendable es nombrarlo en mayuscula
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosApregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);

            // esta es otra forma en la que pudimos apregar un producto.
            // this._productos[this._contadorProductosApregados] = producto;
        }else{
            console.log('No se pueden agregar mas productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden  += '\n' + producto.toString() + ' ';
        }
        
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden} \n`);
        
    }
}




let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 100);
console.log(producto1.toString());
console.log(producto2.toString());


let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Chamarra', 700);
orden2.agregarProducto(producto3);
orden2.mostrarOrden();
