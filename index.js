const inputUsuario = document.getElementById("usuario")
const inputPassword = document.getElementById("password")
const botonIngresar = document.getElementById("ingresar")
const divSaludo = document.getElementById("saludo")
const divLogin = document.getElementById("divLogin")

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


class Swmerch {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const producto0 = new Swmerch(0, "Funko", 200);
const producto1 = new Swmerch(1, "Comics", 70);
const producto2 = new Swmerch(2, "Figura Black Series", 90);
const producto3 = new Swmerch(3, "Coleccionables", 100);
const producto4 = new Swmerch(4, "Remera Bad batch", 100);
const producto5 = new Swmerch(5, "Tasa Star wars", 120);

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
}
