let nombr = prompt("Ingresa tu nombre");
alert("Buenas, " + nombr + "!");
console.log("El nombre del usuario es:" + nombr + "");


class Swmerch{
constructor(codigo, nombre, precio, stock){
  this.codigo = codigo;
  this.nombre = nombre;
  this.precio = precio; 
  this.stock = stock; 
}
restaStock(){
  this.stock = this.stock - 1;
  console.log("El stock de "+ [this.nombre] + "ha sido actualizado")
}
}

const producto0 = new Swmerch(0, "Funko", 200, 100);
const producto1 = new Swmerch(1, "Comics", 70, 250);
const producto2 = new Swmerch(2, "Figura Black Series", 90, 10);
const producto3 = new Swmerch(3, "Coleccionables", 100, 50);
const producto4 = new Swmerch(4, "Remera Bad batch", 100, 100);
const producto5 = new Swmerch(5, "Tasa Star wars", 120, 150);

const productos = [producto0, producto1, producto2, producto3, producto4, producto5]

const carrito = []

let productosSeleccionados = "Estos son las cosas que podemos ofrecer: "

function agrCarrito(){
  for (item of productos){
    productosSeleccionados += "\n" + [item.codigo] + "-" + [item.nombre] + " a tan solo $" + [item.precio]
  }
  productosSeleccionados += "\n Ingrese el nro de Item que desea agregar a su carrito. para finalizar ingrese 99"
  
  let respuesta = parseInt(prompt(productosSeleccionados))

  while(isNaN(respuesta)){
    alert("Por favor ingrese sólo números")
    respuesta = parseInt(prompt(productosSeleccionados))
  }

  while(respuesta != 99){
    switch(respuesta){
      case 0:
        carrito.push(productos[0])
        alert("Agregamos al carrito el producto " + [productos[0].nombre] + "")
        productos[0].restaStock()
        break;
      case 1: 
        carrito.push(productos[1])
        alert("Agregamos al carrito el producto " + [productos[1].nombre] + "")
        productos[1].restaStock()
        break;
      case 2:
        carrito.push(productos[2])
        alert("Agregamos al carrito el producto " + [productos[2].nombre] + "")
        productos[2].restaStock()
        break;
      case 3:
        carrito.push(productos[3])
        alert("Agregamos al carrito el producto " + [productos[3].nombre] + "")
        productos[3].restaStock()
        break;
      case 4:
        carrito.push(productos[4])
        alert("Agregamos al carrito el producto " + [productos[4].nombre] + "")
        productos[4].restaStock()
        break;
      case 5:
        carrito.push(productos[5])
        alert("Agregamos al carrito el producto " + [productos[5].nombre] + "")
        productos[5].restaStock()
        break;
      default:
        alert("No tenemos el producto que elegiste")
        break;
    }
    respuesta = parseInt(prompt(productosSeleccionados))
  }
  alert("Cerramos tu pedido")
  mostrarCarrito()
}
let productosCarrito = "Vas a llevar: "
let precioCarrito = 0

agrCarrito()

function mostrarCarrito(){
  for (itemsElegidos of carrito){
    productosCarrito += "\n -" + [itemsElegidos.nombre] + ""
    precioCarrito += itemsElegidos.precio
  }

  alert("Entonces: \n" + [productosCarrito] + "\n Por un total de $" + [precioCarrito] + "")
}

let llevar = parseInt(
prompt(
"Tiene un descuento con su compra? 1.Si - 2.No"
)
);

let descuent = false;
let opcion;

while (descuent === false) {
  if (llevar === 1) {
    descuent = true;
    opcion = "Ingrese su descuento";
  } else if (llevar === 2) {
    descuent = true;
    opcion = "";
  } else {
   llevar = parseInt(prompt("Debe elegir una opcion 1.Si - 2.No"));
  }
}

console.log(opcion);


function calcularPrecio(precioCarrito, descuento) {
let resultado = precioCarrito / descuento;
return resultado;
}

let descuento = parseInt(prompt("Ingrese su descuento"));

let resultadoDiv = calcularPrecio(precioCarrito, descuento);
console.log(resultadoDiv);
alert("Su descuento es de: $" + resultadoDiv);
