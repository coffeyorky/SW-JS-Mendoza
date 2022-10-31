let nombre = prompt("Ingresa tu nombre");
alert("Buenas, " + nombre + "!");
console.log("El nombre del usuario es:" + nombre + "");


let llevar = parseInt(prompt("Desea que se le entregue el pedido en un establecimiento? 1.Si - 2.No"))

let dondeComera = false
let opcion

while (dondeComera === false){
    if (llevar === 1 ) {
    dondeComera = true;
    opcion = "Debera seleccionar donde desea buscarlo"
  } else if (llevar === 2 ) {
    dondeComera = true;
    opcion = "Puede continuar"
  } else {
    llevar = parseInt(prompt("Debe elegir una opcion 1.Si - 2.No"))
  }
}
  console.log(opcion)

function calcularPrecio(precio, descuento) {
  let resultado = precio / descuento;
  return resultado;
}

let precio = parseInt(prompt("Ingresa el precio de la compra"));
let descuento = parseInt(prompt("Ingrese el descuento"));

let resultadoDiv = calcularPrecio(precio, descuento);
console.log(resultadoDiv);
alert("El total es: $" + resultadoDiv);
