/* *Cartelito de Saludo al cargar la pagina **/
Toastify({
    text: "¡Hola!",
    duration: 4500,
    newWindow: true,
    gravity: "top",
    position: 'left',
    style: {
        background: '#e0b0ff',
        color: `black`,
    }
}).showToast();

// cartelitos de alerta aplicando Libreria SweetAlert2 

let alerta = 0
const timeoutId = setTimeout(() => {
    Swal.fire({
        title: '¿No encontrás lo que estás buscando?',
        text: `Te podemos asesorar para ayudarte`,
        imageUrl: 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg',
        imageWidth: 300,
        imageHeight: 150,
        imageAlt: 'Custom image',
        html: `
         <p>Te podemos asesorar para ayudarte, escribinos </p>
         <a href="https://www.whatsapp.com/?lang=es" target="_blank">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke=" #aa6fe6"
          viewBox="0 0 16 16">
          <path
            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>`,
        confirmButtonColor: '#aa6fe6',
        cancelButtonColor: `black`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
            ' Genial!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
            'No, gracias!',
        cancelButtonAriaLabel: 'Thumbs down',

        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },

    })
    if (alerta > 1) {
        clearTimeout(timeoutId);

    }

}, 20000);

/* 
const timeoutIdDos = */  setTimeout(() => {
    Swal.fire({
        title: 'Proyecto Javascript Finalizado, chau!!.',
        imageUrl: 'https://i.gifer.com/Ps6G.gif',
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: 'Curso finalizado',
        padding: '1.8em',
        color: '#aa6fe6',
        confirmButtonColor: '#aa6fe6',
        backdrop: `
          #aa6fe6
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `,

        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },

    })

}, 50000);

/* clearTimeout(timeoutIdDos);
 */ 


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

/* **CREACION DE OBJETOS** */

///creación de objetos perfumes

const perfumeGivenchy = new Producto(1, "Perfume Givenchy", "Givenchy", 25000, "img/perfume-linterdit-rouge.jpg");
const perfumeArmani = new Producto(2, "Perfume My Way", "Giorgio Armaani", 27000, "img/perfumemywayarmani.jpg");
const perfumeKenzo = new Producto(3, "Perfume Kenzo", "Kenzo", 28900, "img/flower_by_kenzo_mujer.jpg");
const perfumeSarkany = new Producto(4, "Perfume Sarkany", "Sarkany", 31000, "img/perfumesarkany.jpg");
const perfumeBvlgari = new Producto(5, "Perfume Bvlgari", "Bvlgari", 31000, "img/perfumebvlgari.jpg");
const perfumeCalvinKlein = new Producto(6, "Perfume Calvin Klein", "Calvin Klein", 31000, "img/calvinkleinwomen.jpg");

///creación de objetos jabones

const jabonesLavanda = new Producto(7, "Jabón de Lavanda", "Igoris", 350, "img/jaboneslavanda.jpg");
const jabonRosa = new Producto(8, "Jabón Roses", "Igoris", 350, "img/jabonderosas.jpg");
const jabonDeGlicerina = new Producto(9, "Jabón de Glicerina", "Igoris", 250, "img/jabondeglicerina.jpg");
const jabonDeMiel = new Producto(10, "Jabón de Miel de Abejas", "Igoris", 370, "img/jabondemiel.jpg");
const jabonDeAvena = new Producto(11, "Jabón de Avena", "Igoris", "370", "img/jabondeavena.jpg");
const jabonDeHierbas = new Producto(12, "Jabón de Hierbas", "Igoris", 370, "img/jabondehierbas.jpg");
const jabonIgoris = new Producto(13, "Set de Jabones Pins", "Igoris", 650, "img/minijabones.jpg");

///creación de objetos esmaltes
const esmalteHermesNaranja = new Producto(14, "Esmalte Naranja", "Hermes", 450, "img/esmaltehermesnaranja.jpg");
const esmalteHermesRojo = new Producto(15, "Esmalte Rojo", "Hermes", 450, "img/esmaltehermesrojo.jpg");
const esmalteHermesVerde = new Producto(16, "Esmalte Verde", "Hermes", 450, "img/esmaltehermesverde.jpg");
const esmalteHermesAzul = new Producto(17, "Esmalte Azul", "Hermes", 450, "img/esmaltehermesazul.jpg");
const esmalteHermes = new Producto(18, "Esmalte Negro", "Hermes", 450, "img/esmaltehermes.jpg");


///array con los productos del catalago


const productos = [perfumeGivenchy, perfumeArmani, perfumeKenzo, perfumeSarkany, perfumeBvlgari, perfumeCalvinKlein, jabonesLavanda, jabonRosa, jabonDeGlicerina, jabonDeMiel, jabonDeAvena, jabonDeHierbas, jabonIgoris,
    esmalteHermesNaranja, esmalteHermesRojo, esmalteHermesVerde, esmalteHermesAzul,
    esmalteHermes];


    let productosEnCarritoLS = localStorage.getItem("carrito");


const contenedorProductos = document.getElementById("contenedorProductos");
const numeritoCarrito = document.querySelector("#numerito");


contenedorProductos.innerHTML = "";


productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add('col-xl-6', 'col-md-6', 'col-sm-12');
    div.innerHTML =
        `
             <div class="estilo-c">
                <div class=" card img-container">
                    <img class="fotos-cuadradas11 zoom card-img-top img-fluid " src="${producto.img}" alt="${producto.marca}">
                    <span class="promo">15% de descuento</span>
                </div>
             
                <div class="info-container card">
                    <p>${producto.nombre}</p>
                    <strong>$${producto.precio}</strong>
                    <button id= "boton${producto.id}" class="btn add-cart" > Añadir al carrito</button>
                </div>
             </div>
            `;

    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
    });

});




const carrito = [];

/* let productosEnCarrito;
 */
const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
        
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
        Toastify({
            text: `Agregaste tu producto: ${producto.cantidad} ${producto.nombre} al carrito`,
            duration: 1000,
            destination: "./micarrito.html",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true, 
            style: {
                background: "linear-gradient(to right, #00b09b, #ff00d4)",
            }, 
            onClick: function () { } 
        }).showToast();
/*         const totalCarrito = productos.reduce((acumulador, productos) => acumulador + productos.precio, 0);
 */

    }

/*     actualizarCarrito();
 */
    actualizarNumeritoCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));

};

function actualizarNumeritoCarrito() {
    let nuevoNumeritoCarrito = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numeritoCarrito.innerText = nuevoNumeritoCarrito;
}


//** método REDUCE**/


/* **Asincronismo con fecth y json local** */
const productosJson = document.querySelector('#listadoJson')

fetch('/data.json')
    .then((res) => res.json())
    .then((datos) => {

        datos.forEach((producto) => {
            const divJson = document.createElement('divJson')
            divJson.classList.add('col-xl-6', 'col-md-6', 'col-sm-12');
            divJson.innerHTML = `
            <div class="estilo-c">
               <div class=" card img-container">
                   <img class="fotos-cuadradas11 zoom card-img-top img-fluid " src="${producto.img}" alt="${producto.marca}">
               </div>
            
               <div class="info-container card">
                   <p>${producto.nombre}</p>
                   <strong>$${producto.precio}</strong>
                   <button id= "boton${producto.id}" class="btn add-cart" > Añadir al carrito</button>
               </div>
            </div>
           `

            productosJson.append(divJson)
        })
    })

    .catch(error => console.log(error))
    .finally(() => console.log("Proyecto Javascript Finalizado, chau!!"))

