let nombre = prompt("Ingresa tu nombre");
alert("Buenas, "+nombre+"!");
console.log ("El nombre del usuario es:"+nombre+"");


const dondeComera =prompt("Desea que se le entregue el pedido en un establlecimiento?")
let bolsa
if (dondeComera.toLowerCase() == "si"){
    alert("Debera seleccionar donde desea buscarlo")
}else if(dondeComera.toLowerCase() == "no"){
    alert("Puede continuar entonces")
}else{
    alert("Puede proceder a pagar")
}


function calcularPrecio(precio,descuento){
    let resultado = precio / descuento;
    return resultado
}

let precio = parseInt(prompt("Ingresa el precio de la compra"))
let descuento = parseInt(prompt("Ingrese el descuento"))

let resultadoDiv = calcularPrecio(precio,descuento)
console.log(resultadoDiv)
alert("El total es: $" +(resultadoDiv));