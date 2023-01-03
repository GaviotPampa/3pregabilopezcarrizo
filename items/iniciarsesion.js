//CODIGO HTML DE REFERENCIA
/* <div id="contenedor"></div>  */
//CODIGO JS
let container = document.getElementById("contenedor")
// cambio el código HTML interno
container.innerHTML = "<h3> Crear Cuenta</h3>";
// cambio el atributo class
container.className = "paginaprincipal contenedorhijo contenedortexto"
/* class="pagina-principal contenedorhijo" */
/* class="contenedortexto" */


class Cliente {
    constructor(nombreCliente, correo, apellido) {
        this.nombreCliente = nombreCliente                   
        this.apellido = apellido;
        this.correo = correo;
    
    }

    bienvenida (){
        console.log("Bienvenido", this.nombreCliente);
    }

}

const arrayClientes = [];

arrayClientes.forEach (cliente => console.log("Hola", cliente ));

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombreUsuario = document.getElementById("nombreUsuario");
    const apellido = document.getElementById("apellido");
    const nombreCorreo = document.getElementById("correo");

    const cliente = new Cliente(nombreUsuario.value, nombreCorreo.value, apellido.value);
    arrayClientes.push(cliente);
    localStorage.setItem("arrayClientes", JSON.stringify(cliente));


    console.log(arrayClientes);

    formulario.reset ();

    

});
    

/* 
let historial = document.getElementById("historial");let usuariosNuevos;let formulario = document.getElementById("formulario");formulario.addEventListener("submit", (e) => {e.preventDefault();
    let inputs = e.target.children;let usuario = {nombre: inputs[0].value,edad: inputs[1].value,};
    let usuariosStorage = JSON.parse(localStorage.getItem("usuariosStorage"));
    if (usuariosStorage) {usuariosNuevos = usuariosStorage;} 
    else {usuariosNuevos = [];}usuariosNuevos.push(usuario);
    localStorage.setItem("usuariosStorage", JSON.stringify(usuariosNuevos));});
    
    historial.addEventListener("click", () => {let usuariosStorage = JSON.parse(localStorage.getItem("usuariosStorage"));usuariosStorage.forEach(usuario => {let div = document.createElement("div");div.innerHTML = `Nombre: ${usuario.nombre}Edad: ${usuario.edad}`;document.body.append(div);});})
 */