/*** Contructor del Molde***/

class Producto {
    constructor(id, nombre, marca, precio, img, cantidad) {
        this.id = id
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;

    }

   }

///creación de objetos perfumes

const perfumeGivenchy = new Producto(1, "Perfume Givenchy", "Givenchy", 25000, "img/perfume-linterdit-rouge.jpg");
const perfumeArmani = new Producto(2, "Perfume My Way", "Giorgio Armaani", 27000, "img/perfumemywayarmani.jpg");
const perfumeKenzo = new Producto(3, "Perfume Kenzo", "Kenzo", 28900, "img/flower_by_kenzo_mujer.jpg");
const perfumeSarkany = new Producto(4, "Perfume Sarkany", "Sarkany", 31000,"img/perfumesarkany.jpg");
const perfumeBvlgari = new Producto(4, "Perfume Bvlgari", "Bvlgari", 31000,"img/perfumebvlgari.jpg");
const perfumeCalvinKlein = new Producto(4, "Perfume Calvin Klein", "Calvin Klein", 31000,"img/calvinkleinwomen.jpg");

///creación de objetos jabones

const jabonesLavanda= new Producto(5, "Jabób de Lavanda","Igoris", 350, "img/jaboneslavanda.jpg");
const jabonRosa = new Producto(6, "Jabón Roses","Igoris", 350, "img/jabonderosas.jpg");
const jabonDeGlicerina = new Producto(7, "Jabón de Glicerina", "Igoris", 250,"img/jabondeglicerina.jpg");
const jabonDeMiel = new Producto(8, "Jabón de Miel de Abejas", "Igoris", 370,"img/jabondemiel.jpg");
const jabonDeAvena = new Producto(9, "Jabón de Avena", "Igoris", "370","img/jabondeavena.jpg");
const jabonDeHierbas = new Producto(10, "Jabón de Hierbas", "Igoris", 370,"img/jabondehierbas.jpg"); 
const jabonIgoris = new Producto(11,"Set de Jabones Pins", "Igoris", 650, "img/minijabones.jpg");

///creación de objetos jabones
const esmalteHermesNaranja = new Producto(11,"Esmalte Naranja", "Hermes", 450, "img/esmaltehermesnaranja.jpg");
const esmalteHermesRojo = new Producto(11,"Esmalte Rojo", "Hermes", 450, "img/esmaltehermesrojo.jpg");
const esmalteHermesVerde = new Producto(11,"Esmalte Verde", "Hermes", 450, "img/esmaltehermesverde.jpg");
const esmalteHermesAzul = new Producto(11,"Esmalte Azul", "Hermes", 450, "img/esmaltehermesazul.jpg");
const esmalteHermes = new Producto(11,"Esmalte Negro", "Hermes", 450, "img/esmaltehermes.jpg");


///array con los productos del catalago

const productos = [perfumeGivenchy, perfumeArmani, perfumeKenzo,perfumeSarkany, perfumeBvlgari, perfumeCalvinKlein, jabonesLavanda, jabonRosa, jabonDeGlicerina,jabonDeMiel, jabonDeAvena, jabonDeHierbas,jabonIgoris,
    esmalteHermesNaranja,  esmalteHermesRojo, esmalteHermesVerde,esmalteHermesAzul,
    esmalteHermes];

const contenedorProductos = document.getElementById("contenedorProductos");

    productos.forEach(producto => {
        const divProducto= document.createElement("div");
        divProducto.classList.add('col-xl-6', 'col-md-6', 'col-sm-12');
        divProducto.innerHTML =
            `
             <div class="estilo-c">
                <div class=" card img-container">
                    <img class="fotos-cuadradas11 zoom card-img-top img-fluid py-3"" src="${producto.img}" alt="${producto.marca}">
                    <span class="promo">15% de descuento</span>
                </div>
             
                <div class="info-container card">
                    <p>${producto.nombre}</p>
                    <strong>${producto.precio}</strong>
                    <button id= "boton ${producto.id}" class="btn add-cart" > Añadir al carrito</button>
                </div>
             </div>
            `;
        contenedorProductos.appendChild(divProducto);
    /*   const boton = document.getElementById(`boton${producto.id}`);
       boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id);
  }); */
});
        
  
const carrito = [];

const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      carrito.push(producto);
    }
    actualizarCarrito();
  };

  

//Muestro el carrito de compras modificando el DOM.

const contenedorCarrito = document.getElementById('contenedorCarrito');
const verCarrito = document.getElementById('verCarrito');

verCarrito.addEventListener('click', actualizarCarrito);

function actualizarCarrito() {
  let aux = '';
  carrito.forEach((producto) => {
    aux +=  `
     <div class="card estilo-c">
        <div class="img-container">
            <img class="fotos-cuadradas11 zoom" src="${producto.img}" alt="${producto.marca}">
        </div>
     
        <div class="info-container">
            <p> ${producto.nombre}</p>
            <strong>${producto.precio}</strong>
            <button onClick = "eliminarDelCarrito(${producto.id})"  class="add-cart"> Eliminar del carrito</button>
        </div>
     </div>
    `;
 });

  contenedorCarrito.innerHTML = aux;
  calcularTotalCompra();
}

//Agrego una función que elimine el producto del carrito:

const eliminarDelCarrito = (id) => {
  const producto = carrito.find((producto) => producto.id === id);
  carrito.splice(carrito.indexOf(producto), 1);
  actualizarCarrito();
};

///Función para vaciar todo el carrito por completo:

const vaciarCarrito = document.getElementById('vaciarCarrito');
vaciarCarrito.addEventListener('click', () => {
  carrito.splice(0, carrito.length);
  actualizarCarrito();
});

//Creo una función que me calcule el total del carrito:

const totalCompra = document.getElementById('totalCompra');

const calcularTotalCompra = () => {
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });
  totalCompra.innerHTML = total;
};



//Mostramos mensaje con el total de la compra

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
        //+= es igual a poner totalCompra = totalCompra + producto.precio * producto.cantidad
    })
    total.innerHTML = `Total: $${totalCompra}`;
}


/*
const productos = [];
productos.push(new Producto("esmalte", "Be", "celete", 329.99, 15));
productos.push(new Producto("esmalte", "Be", "rosa", 329.99, 10));
productos.push(new Producto("perfume", "Giorgio Armani", "Acqua", 27500, 5));
productos.push(new Producto("jabon", "Be Nature", "oliva", 500, 20));

console.log(productos); */
///FOR
/* let comenzar = alert("Hola. Queres iniciar sesion?");

function bienvenida(comenzar) {

    let saludo = "Comencemos";
    alert(saludo);
}

bienvenida(comenzar)


let nameUsuario = prompt("Ingrese su Nombre de Usuario: ");

let passwordUsuario = parseInt(prompt("Ingrese su contraseña: 12345"));
const passwordCorrecto = 12345;

for (let i = 0; i < 3; i++) {
    if (passwordUsuario === passwordCorrecto) {
        alert(`Contraseña correcta. Bienvenido ${nameUsuario}`);
        break;
    }
    else if (passwordUsuario != passwordCorrecto) {
        alert("Contraseña Incorrecta. Volvé a ingresar tu contraseña");
        passwordUsuario = parseInt(prompt("Ingrese su contraseña: 12345"));
        break;
    }
    else {
        passwordUsuario = parseInt(prompt("Contraseña incorrecta. Se acabaron sus intentos.Por favor intenta mas tarde"));
        break;
    }

} 
 */

//while - switch

/* function saludar(nameUsuario) {

    let mensaje = "Vamos por tus productos" + " " + nameUsuario;
    alert(mensaje);
}

saludar(nameUsuario)

///***Preentrega 2***///
/* 
let productoSeleccionado = prompt("Ingresa el producto que queres buscar: \n esmalte  \n  perfume  \n  jabon  \n esmalteMetalizado \n  perfumeBvlgari");

function seleccionarProducto() {
    let productoSeleccionado = (prompt(esmalte, perfume, jabon, "esmalte Metalizado", "perfume Bvlgari").toUpperCase);

    console.log(Producto.find((producto) => producto.nombre === productoSeleccionado));

}
const eleccion = productoSeleccionado

productoSeleccionado = window.confirm((`Tu producto elegido es: ${productoSeleccionado} \n Si esta bien ingresa Aceptar \n Si no es el producto que querías ingresa: Cancelar`));

const eleccionConfirmar = window.confirm('Estas seguro? ');

if (eleccionConfirmar === true) {
    window.alert('Genial, sigamos.');
}
else if (eleccion != true) {
    alert("Elija nuevamente un producto");
}
else {
    window.alert('Cancelar');
}


for (const arrayProductos of productos) {
    console.log("Productos en Stock: ");
    console.log(arrayProductos);
} */
 

//metodo push
/* 
let productosNuevos = ["Esmalte", "Perfume", "Jabón"];
console.log("Array nuevos productos");
console.log(productosNuevos.join(" "));

console.log("Agrego perfume : ");
productosNuevos.push(" Perfume-Bvlgary");
console.log(productosNuevos.join(" ")); */

//Metodo unshift(). 

/* console.log("Agrego Esmalte metalizado : ");
productosNuevos.unshift("Esmalte Metalizado ");
console.log(productosNuevos);

const esmalteMetalizado = new Producto("Esmalte Metalizado", "Be", 249.99, 10);
const perfumeBvlgari = new Producto("Perfume", "Bvlgari", 33850, 1);

let nombre = prompt("Ingrese el nombre del producto a agregar")
let identificador = false;

for (const producto of productos) {
    if (producto.nombre === nombre) {
        identificador = true;
    }
}

if (identificador) {
    alert("Producto agregado")
} else {
    alert("Producto No encontrado")
    nombre = prompt("Ingrese el nombre del producto a agregar")
} */


//** método REDUCE**/
/* 
const totalCarrito = productos.reduce((acumulador, productosNuevos) => acumulador + productosNuevos.precio, 0);

alert("Total del Carrito:");
alert(totalCarrito);


let entrada = prompt("¿Que medio de pago querés usar?: \n Tarjeta de credito \n debito \n efectivo \n mercado pagp \n tranferencia");

while (entrada != "ESC") {
    switch (entrada) {
        case "tarjeta de credito":
            alert("Hoy podes abonar hasta en 6 cuotas sin interés!");
            break;
        case "debito":
            alert("Podrás abonar en una cuota");
            break;
        case "efectivo":
            alert("Podrás abonar a través de Pagofácil o Rapipago en una cuota");
            break;
        case "mercado pago":
            alert("Podés abonar con todos los medios de pago que te brinda MercadoPago");
            break;
        case "transferencia":
            alert("Genial, tendrás un 15% de descuento en tu compra");
            break;
        default:
            alert("Tenemos todos los medios de pago disponibles.Elegí el tuyo!");
            break;

    }
}
entrada = prompt("Ingresa tu medio de pago");


//Método Includes()  retorna un booleano si lo encuentra. 

let booleanoPerfume = arrayProductosActuales.includes("Perfume");
console.log(booleanoPerfume);

jabon.vender();
console.log(jabon);

perfumeBvlgari.vender();
console.log(perfumeBvlgari);

const cantidad = 0
const sinStock = true
const stock = false

if (cantidad === 0) {
    console.log('Producto Agotado');
    console.log(sinStock);
}
else if (cantidad >= 1) {
    console.log('Hay Stock');

} */

//**tercer preentrega**/

/* const button = document.querySelectorAll("button");

function ejecutar() {

}
button.addEventListener("click", () => {
    alert("Tu producto está en tu carrito");

}) */



