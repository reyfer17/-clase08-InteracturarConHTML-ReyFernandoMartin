class Producto {
    constructor(codigo, nombre, precio, detalle, imagen){
    this.nombre = nombre
    this.codigo = codigo
    this.precio = precio
    this.detalle = detalle
    this.imagen = imagen
    }
}

//const pochocloGrande = new Producto (1, "Pochoclo Grande", 1000, "dulce, en balde", 'images/pochocloGrande.webP')
const pochocloGrande = new Producto (1, "Pochoclo Grande", 1000, "dulce, en balde", 'images/pochocloGrande.jpg')
const pochocloMediano = new Producto (2, "Pochoclo Mediano", 800, "dulce, en caja", 'images/pochocloMediano.jpg')
const pochocloChico = new Producto (3, "Pochoclo Chico", 600, "dulce, en bolsita", 'images/pochocloChico.gif')
const gaseosaGrande = new Producto (4, "Gaseosa Grande", 500, "vaso x 950ml", 'images/gaseosaGrande.jpg')
const gaseosaChica = new Producto (5, "Gaseosa Chica", 400, "botella x 500ml", 'images/gaseosaChica.jpg')
const agua = new Producto (6, "Agua", 300, "botella x 500ml", 'images/agua.png')
//const chocolate = new Producto (7, "Chocolate", 800, "con leche x 300g", 'images/chocolate.webP')
const chocolate = new Producto (7, "Chocolate", 800, "con leche x 300g", 'images/chocolate.jpg')

const productos = [pochocloGrande, pochocloMediano, pochocloChico, gaseosaGrande, gaseosaChica, agua, chocolate]

const divProductos =document.getElementById("productos")

productos.forEach (producto => {
    divProductos.innerHTML += `
    <div class="card productos"  id="${producto.codigo}" 
    style="width: 14rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.detalle}</p>
            <h2 class="card-text">$${producto.precio}</h2>
        </div>
    </div>
    `
})