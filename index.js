const inputUsuario = document.getElementById("usuario")
const inputPassword = document.getElementById("password")
const botonIngresar = document.getElementById("ingresar")
const divSaludo = document.getElementById("saludo")
const divLogin = document.getElementById("divLogin")

// inicio de sesion
botonIngresar.onclick = () => {
  const usuario = {
    usuario: inputUsuario.value
  }
  localStorage.setItem("usuario",JSON.stringify(usuario))
  divLogin.remove()

  const titSaludo = document.createElement("h4")
  titSaludo.innerText = "Saludos " + [usuario.usuario]
  divSaludo.append(titSaludo)
}

// inicio de sesion
// cuerpo
class Swmerch {
  constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
  }
}

const producto0 = new Swmerch(0, "Funko", 200, "../img/funko.jpg");
const producto1 = new Swmerch(1, "Comics", 70, "../img/comic.jpeg");
const producto2 = new Swmerch(2, "Figura Black Series", 90, "../img/rex.jpg");
const producto3 = new Swmerch(3, "Coleccionables", 100, "../img/tmand.jpg");
const producto4 = new Swmerch(4, "Remera Bad batch", 100, "../img/thbbr.jpg");
const producto5 = new Swmerch(5, "Tasa Star wars", 120, "../img/taza.png");

const productos = [
  producto0,
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
];

const divProductos = document.getElementById("divProductos")
productos.forEach(producto=>{
  divProductos.innerHTML +=
  "<div id=" + [producto.id]+ " class=\"card cardProd\">" +
  "<img src=" + [producto.img] + ">" +
  "<div class= card-body>" +
  "<h4 class= card-title>" + [producto.nombre] + "</h4>"+
  "<p class= card-text>" + [producto.precio] + "</p>" + 
  "<button id=" + [producto.id]+ " class=\"btn btn-primary\">Agregar</button>" +
  "</div<"
  "</div<"
})

const carrito = JSON.parse(localStorage.getItem("carrito")) || []
console.log(carrito)
const botonesAgregar = document.querySelectorAll(".btn-primary")

botonesAgregar.forEach(boton=>{
  boton.onclick = () => {
    const productoSeleccionado = productos.find(
      (p) => p.id === parseInt(boton.id))
    const productoCarrito = { ...productoSeleccionado,cantidad: 1 }
      console.log(productoSeleccionado,productoCarrito)
    const indexCarrito = carrito.findIndex(
    (prod) => prod.id === productoCarrito.id
    )
    if (indexCarrito === -1) { 
      carrito.push(productoCarrito)
    } else {
      carrito[indexCarrito].cantidad++
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    console.log(carrito)
  }
}
)
const cotonAlert = document.getElementById("sweetAlerta")

const botonFinalizar = document.querySelector("#finalizar")
 botonFinalizar.onclick = () => {
   const valores = carrito.map(prod=>prod.precio * prod.cantidad)
   let totalCompra = 0
   valores.forEach(valor=>{
   totalCompra += valor 
 })
console.log(totalCompra)
console.log(valores)
}

const botonLimpiar = document.querySelector("#limpiar")
botonLimpiar.onclick = () => {
  localStorage.clear(carrito)
  Swal.fire({
  title: "Carrito vaciado, actualice la pagina.",
  icon: "success"
})
}

const preDolar = document.getElementById("preDolar")

const cargarDolar = () => {
  fetch("https://criptoya.com/api/dolar")
  .then(response => response.json())
  .then(({solidario, ccl, mep, ccb, blue}) => {
  console.log(solidario, ccl, mep, ccb, blue)
  preDolar.innerHTML +=
  "<h2>Cotizaciones del dolar en caso de necesitar conversion</h2>" +
  "<p>Solidario: $" + [solidario] + "</p>" +
  "<p>Blue: $" + [blue] + "</p>" +
  "<p>CCL: $" + [ccl] + "</p>" +
  "<p>Mep: $" + [mep] + "</p>" +
  "<p>CCB: $" + [ccb] + "</p>" 
})
}
cargarDolar()
setInterval (() => { 
  cargarDolar()
}, 60000);

// cuerpo
